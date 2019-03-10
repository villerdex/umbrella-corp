from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.exceptions import ValidationError, ParseError
from django.core.paginator import Paginator

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
        return Response({"customers": "Customer success save '{}' ".format(customer)})

    def get(self, request, pk=None):
         customers = Customer.objects.all()
         serializer = CustomerSerializer(customers, many=True)

         paginator = Paginator(serializer.data, 10)
         page = paginator.page(1)
         print(page.object_list)

        #  for c in page.object_list:
        #      c["owner"] = 'test'
        #      print(c["owner"] )

         return Response({"customers": page.object_list})

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
        return Response({"message": "Article with id `{}` has been deleted.".format(pk)},status=204)