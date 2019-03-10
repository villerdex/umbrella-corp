from rest_framework import serializers
from .models import Customer

class CustomerSerializer(serializers.ModelSerializer):
    """Serializer to map the Model instance into JSON format."""

    name = serializers.CharField(max_length=255)
    person_contact = serializers.CharField()
    telephone = serializers.CharField()
    location = serializers.CharField()
    num_employees = serializers.IntegerField()

    class Meta:
        model = Customer
        fields = ("name", "person_contact", "telephone", "location", "num_employees")

    def create(self, validated_data):
        return Customer.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.person_contact = validated_data.get('person_contact', instance.person_contact)
        instance.telephone = validated_data.get('telephone', instance.telephone)
        instance.location = validated_data.get('location', instance.location)
        instance.num_employees = validated_data.get('num_employees', instance.num_employees)

        instance.save()
        return instance