from django.conf import settings
from rest_framework import serializers
from .models import Category, Section, Advertisement, AdvertisementImage

class CategoriesListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('name', 'url',)

class SectionsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Section
        fields = ('name', 'url',)

class AdvertisementImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdvertisementImage
        fields = ('image',)

class AdvertisementsListSerializer(serializers.ModelSerializer):
    location = serializers.SlugRelatedField(slug_field='location', read_only=True, source='user')
    images = AdvertisementImageSerializer(many=True)
    pub_date = serializers.DateTimeField(format=settings.DATE_FORMAT)

    class Meta:
        model = Advertisement
        fields = ('id', 'title', 'price', 'delivery', 'location', 'images', 'pub_date',)

class AdvertisementDetailSerializer(serializers.ModelSerializer):
    section = serializers.SlugRelatedField(slug_field='name', read_only=True)
    location = serializers.SlugRelatedField(slug_field='location', read_only=True, source='user')
    phone = serializers.SlugRelatedField(slug_field='phone', read_only=True, source='user')
    fullname = serializers.CharField(read_only=True, source='user.get_full_name')
    images = AdvertisementImageSerializer(many=True)

    class Meta:
        model = Advertisement
        exclude = ('user',)

class AdvertisementCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Advertisement
        exclude = ('id', 'pub_date',)
