from django.conf.urls import include
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import CustomerView, WeatherView

urlpatterns = {
    path('customers', CustomerView.as_view(), name="getCustomers"),
    path('customers/<int:pk>', CustomerView.as_view(), name="updateCustomer"),
    path('customers-weather/', WeatherView.as_view(), name="getCustomersWeather"),
    path('customers-chart/', WeatherView.as_view(), name="getCustomersChartr"),
}

urlpatterns = format_suffix_patterns(urlpatterns)