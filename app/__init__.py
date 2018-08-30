import logging
from logging.handlers import SMTPHandler, RotatingFileHandler
import os
from flask import Flask, request, current_app
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager
from flask_mail import Mail
from flask_moment import Moment
from flask_cors import CORS 
from flask_resize import Resize
from flask_wtf.csrf import CSRFProtect

from config import Config
from flask_socketio import SocketIO
# from flask_babel import Babel, lazy_gettext as _l
# from elasticsearch import Elasticsearch
# from redis import Redis
# import rq

db = SQLAlchemy()
migrate = Migrate()
login = LoginManager()
login.login_view = 'admin.login'
login.login_message = ('Please log in to access this page.')
login.login_message_category = "alert-danger"
login.session_protection = "strong" # When session protection is active, each request, it generates an identifier for the user’s computer (basically, a secure hash of the IP address and user agent). If the session does not have an associated identifier, the one generated will be stored. If it has an identifier, and it matches the one generated, then the request is OK.
mail = Mail()
cors = CORS()
moment = Moment()
resize = Resize()
csrf = CSRFProtect()
socketio = SocketIO()


def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)
    db.init_app(app)
    migrate.init_app(app, db)
    login.init_app(app)
    mail.init_app(app)
    moment.init_app(app)
    cors.init_app(app, resources={r"/api/*": {"origins": "*"}})
    csrf.init_app(app)
    resize.init_app(app)
    app.jinja_env.cache = {}
    socketio.init_app(app)
    # babel.init_app(app)
    # app.elasticsearch = Elasticsearch([app.config['ELASTICSEARCH_URL']]) \
    #     if app.config['ELASTICSEARCH_URL'] else None
    # app.redis = Redis.from_url(app.config['REDIS_URL'])
    # app.task_queue = rq.Queue('microblog-tasks', connection=app.redis)

    from app.errors import bp as errors_bp
    app.register_blueprint(errors_bp)

    from app.auth import bp as auth_bp
    app.register_blueprint(auth_bp, url_prefix='/auth')

    from app.main import bp as main_bp
    app.register_blueprint(main_bp)

    from app.api import bp as api_bp
    app.register_blueprint(api_bp, url_prefix='/api')
    
    from app.admin import bp as admin_bp
    app.register_blueprint(admin_bp, url_prefix='/admin')

    from app.gallery import bp as gallery_bp
    app.register_blueprint(gallery_bp, url_prefix='/content')
   
    if not app.debug and not app.testing:
        if app.config['MAIL_SERVER']:
            auth = None
            if app.config['MAIL_USERNAME'] or app.config['MAIL_PASSWORD']:
                auth = (app.config['MAIL_USERNAME'],
                        app.config['MAIL_PASSWORD'])
            secure = None
            if app.config['MAIL_USE_TLS']:
                secure = ()
            mail_handler = SMTPHandler(
                mailhost=(app.config['MAIL_SERVER'], app.config['MAIL_PORT']),
                fromaddr='no-reply@' + app.config['MAIL_SERVER'],
                toaddrs=app.config['ADMINS'], subject='MHS Failure',
                credentials=auth, secure=secure)
            mail_handler.setLevel(logging.ERROR)
            app.logger.addHandler(mail_handler)

        if app.config['LOG_TO_STDOUT']:
            stream_handler = logging.StreamHandler()
            stream_handler.setLevel(logging.INFO)
            app.logger.addHandler(stream_handler)
        else:
            if not os.path.exists('logs'):
                os.mkdir('logs')
            file_handler = RotatingFileHandler('logs/MHS.log',
                                               maxBytes=10240, backupCount=10)
            file_handler.setFormatter(logging.Formatter(
                '%(asctime)s %(levelname)s: %(message)s '
                '[in %(pathname)s:%(lineno)d]'))
            file_handler.setLevel(logging.INFO)
            app.logger.addHandler(file_handler)

        app.logger.setLevel(logging.INFO)
        app.logger.info('MHS startup')

    return app


from app import models
