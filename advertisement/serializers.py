from django.conf import settings
from rest_framework import serializers
from auth_core.models import User
from .models import Category, Section, Advertisement, AdvertisementImage

class CategoriesListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('image', 'name', 'url',)

class SectionsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Section
        fields = ('name', 'url',)

class SomeUserInfoSerializer(serializers.ModelSerializer):
    fullname = serializers.CharField(read_only=True, source='get_full_name')

    class Meta:
        model = User
        fields = ('id', 'fullname', 'avatar', 'phone', 'location')

class AdvertisementImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdvertisementImage
        fields = ('id', 'image',)

class AdvertisementsListSerializer(serializers.ModelSerializer):
    location = serializers.SlugRelatedField(slug_field='location', read_only=True, source='user')
    images = AdvertisementImageSerializer(many=True)
    pub_date = serializers.DateTimeField(read_only=True, format=settings.DATE_FORMAT)

    class Meta:
        model = Advertisement
        exclude = ('user', 'section', 'description',)

class AdvertisementDetailSerializer(serializers.ModelSerializer):
    user = SomeUserInfoSerializer()
    section = serializers.SlugRelatedField(slug_field='name', read_only=True)
    images = AdvertisementImageSerializer(many=True)
    pub_date = serializers.DateTimeField(read_only=True, format=settings.DATE_FORMAT)

    class Meta:
        model = Advertisement
        fields = '__all__'

class AdvertisementCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Advertisement
        exclude = ('id', 'pub_date',)
