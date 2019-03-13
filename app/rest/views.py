from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.exceptions import ValidationError, ParseError, APIException
from django.core.paginator import Paginator
import datetime

import requests

from .models import Customer
from .serializer import CustomerSerializer

class CustomerView(APIView):
    """This class defines the create behavior of our rest api."""


    def post(self, request):
        """Save the post data when creating a new bucketlist."""

        customer_serializer = CustomerSerializer(data=request.data)

        if not customer_serializer.is_valid():
            print(customer_serializer)
            raise ValidationError('Some error')
   
        customer = customer_serializer.save()
        return Response({"customers": customer_serializer.data})

    def get(self, request):
         customers = Customer.objects.all()
         serializer = CustomerSerializer(customers, many=True)

         page = request.query_params.get('page', 1);

         paginator = Paginator(serializer.data, 10)
         page_paginator = paginator.page(page)
         print(page_paginator.object_list)

         return Response({"customers": page_paginator.object_list})

    def put(self, request, pk):
        saved_article = get_object_or_404(Customer.objects.all(), pk=pk)
        data = request.data
        serializer = CustomerSerializer(instance=saved_article, data=data, partial=True)

        if serializer.is_valid(raise_exception=True):
            customer_save = serializer.save()
        return Response({"success": "Customer '{}' updated successfully".format(customer_save)})

    def delete(self, request, pk):
        # Get object with this pk
        customer = get_object_or_404(Customer.objects.all(), pk=pk)
        customer.delete()
        return Response({"message": "Customer with id `{}` has been deleted.".format(pk)},status=204)

class WeatherView(APIView):
    #https://openweathermap.org/weather-conditions
    rain_id = ['2', '3', '5', '615', '616']

    def dispatch(self, request, *args, **kwargs):

        if(request.get_full_path() == '/customers-chart/'):
            return self.getCustomerOrderByEmployee(request)
        return super().dispatch(request, *args, **kwargs)

    def getWeather(self, location):

        open_weather = 'http://api.openweathermap.org/data/2.5/forecast?q={location}&appid=01f6ae18de8fe4c8a2280eeb29f0c0db'
        open_weather = open_weather.replace('{location}', location)

        print(open_weather)

        r = requests.get(open_weather)
        weather_response = r.json()

        if(weather_response['cod'] != 200):
             APIException('error on runtime fetching weather')

        for item in weather_response['list']:
            weather = item['weather']
            weather_id = str(weather[0]['id'])[0]
           
            if weather_id in self.rain_id:
                print('weather_id', weather)
                return item['dt']

    def get(self, request): 
         customers = Customer.objects.order_by('-num_employees').all()
         serializer = CustomerSerializer(customers, many=True)

         page = request.query_params.get('page', 1); 

         paginator = Paginator(serializer.data, 10)
         page_paginator = paginator.page(page)

         self.getWeatherByList( page_paginator.object_list )

         return Response({"customers": page_paginator.object_list})

    def getCustomerOrderByEmployee(self, request):
      customers = Customer.objects.order_by('-num_employees').all()
      serializer = CustomerSerializer(customers, many=True)

      print('getCustomerOrderByEmployee', serializer.data)
      self.getWeatherByList(serializer.data)

      return JsonResponse({"customers": serializer.data})

    def getWeatherByList(self, list):
           for customer in list:
            location = customer["location"];
            rain_date = self.getWeather(location)

            if rain_date is not None:
                customer['rain_date'] = datetime.datetime.fromtimestamp(rain_date).strftime('%Y-%m-%d')

