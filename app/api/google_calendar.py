from flask import jsonify
from app.api import bp 
import datetime, json
from googleapiclient.discovery import build
from httplib2 import Http
from oauth2client import file, client, tools

SCOPES = 'https://www.googleapis.com/auth/calendar.readonly'

@bp.route('/gcal', methods=['GET'])
def get_events(html=False):
    store = file.Storage('token.json')
    creds = store.get()
    if not creds or creds.invalid:
        flow = client.flow_from_clientsecrets('credentials.json', SCOPES)
        creds = tools.run_flow(flow, store)
    service = build('calendar', 'v3', http=creds.authorize(Http()))
    now = datetime.datetime.utcnow().isoformat() + 'Z' 
    events_result = service.events().list(calendarId='primary', timeMin=now, maxResults=3, singleEvents=True, orderBy='startTime').execute()
    events = events_result.get('items', [])
    if not events:
        return ''
    payload = []
    for event in events:
        payload.append(
            {
                'id': str(event['id']),
                'title' : event['summary'],
                'description' : event.get('description',''),
                'location' : event.get('location',''),
                'link' : event['htmlLink'],
                'time' : {
                    'start': event['start'].get('dateTime', event['start'].get('date')),
                    'end' : event['end'].get('dateTime', event['end'].get('date'))
                }
            }
        )
    if html:
        temp_payload = {'js': []}
        for item in payload:
            temp_payload['js'].append(
'''var {id} = new Date('{time}').getTime();
            var {x} = setInterval(function() {{
                var {id}now = new Date().getTime();
                var {id}distance = {id} - {id}now;
                var {id}days = Math.floor({id}distance / (1000 * 60 * 60 * 24));
                var {id}hours = Math.floor(({id}distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var {id}minutes = Math.floor(({id}distance % (1000 * 60 * 60)) / (1000 * 60));
                var {id}seconds = Math.floor(({id}distance % (1000 * 60)) / 1000);
                document.getElementById('{days}').innerHTML = {id}days;
                document.getElementById('{hours}').innerHTML = {id}hours;
                document.getElementById('{minutes}').innerHTML = {id}minutes;
                document.getElementById('{seconds}').innerHTML = {id}seconds;
                if ({id}distance < 0) {{
                    clearInterval({x});
                }}
            }}, 1000);'''.format(id='$' + item['id'], time=item['time']['start'],x='$' + item['id']+'_', days=item['id']+'_days', hours=item['id']+'_hours', minutes=item['id']+'_minutes', seconds=item['id']+'_seconds'))
        payload.append(temp_payload)
    # print (payload)
    return jsonify(payload)