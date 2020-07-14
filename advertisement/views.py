from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Category, Section, Advertisement
from .serializers import CategoriesListSerializers, SectionsListSerializers, AdvertisementsListSerializers, AdvertisementDetailSerializers, AdvertisementCreateSerializers

# Create your views here.
class CategoriesListView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializers = CategoriesListSerializers(categories, many=True)
        return Response(serializers.data)

class SectionsListView(APIView):
    def get(self, request, category_url):
        category = Category.objects.get(url=category_url)
        sections = Section.objects.filter(category=category)
        serializers = SectionsListSerializers(sections, many=True)
        return Response(serializers.data)

class AdvertisementListView(APIView):
    def get(self, request, section_url):
        section = Section.objects.get(url=section_url)
        advertisement = Advertisement.objects.filter(section=section)
        serializers = AdvertisementsListSerializers(advertisement, many=True)
        return Response(serializers.data)

class AdvertisementDetailView(APIView):
    def get(self, request, advertisement_id):
        advertisement = Advertisement.objects.get(id=advertisement_id)
        serializers = AdvertisementDetailSerializers(advertisement)
        return Response(serializers.data)

class AdvertisementCreateView(APIView):
    def post(self, request):
        advertisement = AdvertisementCreateSerializers(data=request.data)
        if advertisement.is_valid():
            advertisement.save()
            return Response(status=201)
        return Response(advertisement.errors, status=400)
