import requests as rq
import math

city = "Bender,MD"
apiKey = "91879a728d9e446244c961c5e740d4a4"


def get_weather(api_key,city):
    URL = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric&lang=ru"
    

    r = rq.get(URL).json()
    if r["cod"] == 200:
    #     print(r)
    # else:
    #     print("error")
    # print(URL)

        temperature = r["main"]["temp"]
        
        feels_like = r["main"]["feels_like"]

        hydro = r["main"]["humidity"]

        return {
            'temp':temperature,
            'feels_like':feels_like,
            'hydro':hydro
        }
    else:
        return r"Error {}".format(r["cod"])

weather = get_weather(apiKey,city)

print (weather)


