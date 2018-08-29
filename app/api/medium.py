from flask import jsonify, request, url_for
import os
from medium import Client
from app import db
from app.models import User
from app.api import bp
from app.api.auth import token_auth
from app.api.errors import bad_request

@bp.route('/callback/medium', methods=["GET"])
def medium_callback():
    if request.args.get('code'):
        client = Client(application_id="888a966258eb", application_secret="00769027e3d5b60bef015e4924a2bc3022218de9")
        auth_code = request.args.get('code')
        auth = client.exchange_authorization_code(auth_code, "http://0094f685.ngrok.io/api/callback/medium")
        client.access_token = auth["access_token"]
        user = client.get_current_user()
        user_dir = 'users/'+user["username"]
        if not os.path.exists(user_dir):
            os.makedirs(user_dir)
        with open(user_dir + '/token.json', 'w+') as f:
            json.dump(auth, f)
            f.close()
        with open(user_dir + '/user.json', 'w+') as f:
            json.dump(user, f)
            f.close()
        with open('users.txt', 'a+') as f:
            f.write('{}\n'.format(user["username"]))
            f.close()