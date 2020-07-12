from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Category, Section, Advertisement
from .serializers import CategoriesListSerializers, SectionsListSerializers, AdvertisementsListSerializers, AdvertisementDetailSerializers

# Create your views here.
class CategoriesListView(APIView):
    def get(self, response):
        categories = Category.objects.all()
        serializers = CategoriesListSerializers(categories, many=True)
        return Response(serializers.data)

class SectionsListView(APIView):
    def get(self, response, category_url):
        category = Category.objects.get(url=category_url)
        sections = Section.objects.filter(category=category)
        serializers = SectionsListSerializers(sections, many=True)
        return Response(serializers.data)

class AdvertisementListView(APIView):
    def get(self, response, section_url):
        section = Section.objects.get(url=section_url)
        advertisement = Advertisement.objects.filter(section=section)
        serializers = AdvertisementsListSerializers(advertisement, many=True)
        return Response(serializers.data)

class AdvertisementDetailView(APIView):
    def get(self, response, section_url, advertisement_id):
        section = Section.objects.get(url=section_url)
        advertisement = Advertisement.objects.get(id=advertisement_id, section=section)
        serializers = AdvertisementDetailSerializers(advertisement)
        return Response(serializers.data)
