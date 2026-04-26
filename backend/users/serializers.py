from django.contrib.auth import get_user_model
from rest_framework import serializers

from users.models import User


class RegisterUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=6)
    
    class Meta:
        model = get_user_model()
        fields = ['email', 'password']

    def create(self, validated_data):
        email = validated_data['email']
        password = validated_data['password']

        username = email.split('@')[0]

        user = User.objects.create_user(
            email=email,
            password=password,
            username=username
        )
        
        return user