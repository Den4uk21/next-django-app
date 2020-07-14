from rest_framework import serializers
from .models import Category, Section, Advertisement, AdvertisementImage

class CategoriesListSerializers(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('name', 'url',)

class SectionsListSerializers(serializers.ModelSerializer):
    class Meta:
        model = Section
        fields = ('name', 'url',)

class AdvertisementImageSerializers(serializers.ModelSerializer):
    class Meta:
        model = AdvertisementImage
        fields = ('image',)

class AdvertisementsListSerializers(serializers.ModelSerializer):
    location = serializers.SlugRelatedField(slug_field='location', read_only=True, source='user')
    images = AdvertisementImageSerializers(many=True)

    class Meta:
        model = Advertisement
        fields = ('id', 'title', 'price', 'delivery', 'location', 'images',)

class AdvertisementDetailSerializers(serializers.ModelSerializer):
    section = serializers.SlugRelatedField(slug_field='name', read_only=True)
    location = serializers.SlugRelatedField(slug_field='location', read_only=True, source='user')
    phone = serializers.SlugRelatedField(slug_field='phone', read_only=True, source='user')
    fullname = serializers.CharField(read_only=True, source='user.get_full_name')
    images = AdvertisementImageSerializers(many=True)

    class Meta:
        model = Advertisement
        exclude = ('user',)

class AdvertisementCreateSerializers(serializers.ModelSerializer):
    class Meta:
        model = Advertisement
        exclude = ('id', 'pub_date',)
