from django.db import models

# Create your models here.
from django.db import models

class Customer(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, blank=False)
    person_contact = models.CharField(max_length=255, blank=False)
    telephone = models.CharField(max_length=255, blank=False)
    location = models.CharField(max_length=255, blank=False)
    num_employees = models.IntegerField()
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)

   
    def __str__(self):
        """Return a human readable representation of the model instance."""
        return "{}".format(self.name)