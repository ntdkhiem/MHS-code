from flask import Blueprint, render_template

cs = Blueprint('cs',__name__,static_folder="../static")

@cs.route('/')
def index():
    return render_template('dashboard/cs.html')