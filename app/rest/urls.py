from django.conf.urls import include
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import CustomerView

urlpatterns = {
    path('customers/', CustomerView.as_view(), name="getCustomers"),
    path('customers/<int:pk>', CustomerView.as_view(), name="updateCustomer"),
}

urlpatterns = format_suffix_patterns(urlpatterns)