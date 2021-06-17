from django.shortcuts import render
import urllib.request
import json
import os
from twilio.rest import Client

# Create your views here.


def index(request):
    if request.method == 'POST':
        city = request.POST['city']
        source = urllib.request.urlopen(
            'http://api.openweathermap.org/data/2.5/weather?q=' + city + 
            '&units=imperial&appid=7dc22fd1bbc0b07ecaab0b7cb7b16a29').read()
        list_of_data = json.loads(source)
        data = {
            "temperature": str(list_of_data["main"]["temp"]) + "°F",
        }
    
        account_sid = os.environ['TWILIO_ACCOUNT_SID']
        auth_token = os.environ['TWILIO_AUTH_TOKEN']
        client = Client(account_sid, auth_token)

        message = client.messages.create(
                                    body=f'The temperature in {city} is {data["temperature"]}',
                                    from_='+12027514336',
                                    to='+14152970891'
                                )

        print(message.sid)
        print(data)
    else:
        data = {}
    return render(request, "main/index.html", data)
