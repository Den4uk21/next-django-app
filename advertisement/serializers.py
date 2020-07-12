from rest_framework import serializers
from .models import Category, Section, Advertisement

class CategoriesListSerializers(serializers.ModelSerializer):
    class Meta:
        model = Category
        exclude = ()

class SectionsListSerializers(serializers.ModelSerializer):
    class Meta:
        model = Section
        fields = ('name', 'url',)

class AdvertisementsListSerializers(serializers.ModelSerializer):
    location = serializers.SlugRelatedField(slug_field='location', read_only=True, source='user')

    class Meta:
        model = Advertisement
        fields = ('id', 'title', 'price', 'delivery', 'location', 'images',)

class AdvertisementDetailSerializers(serializers.ModelSerializer):
    section = serializers.SlugRelatedField(slug_field='name', read_only=True)
    location = serializers.SlugRelatedField(slug_field='location', read_only=True, source='user')
    phone = serializers.SlugRelatedField(slug_field='phone', read_only=True, source='user')
    fullname = serializers.CharField(read_only=True, source='user.get_full_name')

    class Meta:
        model = Advertisement
        exclude = ('user',)
