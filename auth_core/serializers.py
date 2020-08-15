from time import time_ns
from django.conf import settings
from django.contrib.auth.hashers import make_password
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer, TokenRefreshSerializer
from .models import User

# JWT
class CustomTokenSerializer:
    accessTime = settings.SIMPLE_JWT['ACCESS_TOKEN_LIFETIME'].total_seconds() * 1000

    def validate(self, attrs):
        data = super().validate(attrs)
        data['expiresOn'] = (time_ns() // 1000) + self.accessTime
        return data

class CustomTokenCreateSerializer(CustomTokenSerializer, TokenObtainPairSerializer):
    pass

class CustomTokenRefreshSerializer(CustomTokenSerializer, TokenRefreshSerializer):
    pass

# User
class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email', 'phone', 'password',)

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data.get('password'))
        return super(UserRegisterSerializer, self).create(validated_data)

class UserProfileSerializer(serializers.ModelSerializer):
    username = serializers.CharField(read_only=True)
    date_joined = serializers.DateTimeField(read_only=True, format=settings.DATE_FORMAT)
    is_active = serializers.BooleanField(read_only=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'email', 'phone', 'avatar', 'location', 'date_joined', 'is_active',)
