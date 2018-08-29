from flask import request, jsonify
from time import sleep
from app.api import bp
from app.auth.email import send_contact_email

@bp.route('/contact', methods=['POST'])
def contact():
    
    name = request.form['name']
    email = request.form['email']
    subject = request.form['subject']
    message = request.form['message']

    if name and email and subject and message:
        data = {'name': name, 'email': email, 'subject': subject, 'message': message}
        res = send_contact_email(data)
        sleep(5)
        return jsonify({'success': res})
    return jsonify({'error': 'Missing data, please try again'})