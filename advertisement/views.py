from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from .models import Category, Section, Advertisement
from .serializers import (
    CategoriesListSerializer, 
    SectionsListSerializer, 
    AdvertisementsListSerializer, 
    AdvertisementDetailSerializer, 
    AdvertisementCreateSerializer
)
from .service import AdvertisementFilter

# Create your views here.
class CategoriesListView(generics.ListAPIView):
    serializer_class = CategoriesListSerializer

    def get_queryset(self):
        categories = Category.objects.all()
        return categories

class SectionsListView(generics.ListAPIView):
    serializer_class = SectionsListSerializer

    def get_queryset(self):
        category = Category.objects.get()
        sections = Section.objects.filter(category=category)
        return sections

class AdvertisementListView(generics.ListAPIView):
    serializer_class = AdvertisementsListSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_class = AdvertisementFilter

    def get_queryset(self):
        section = Section.objects.get()
        advertisement = Advertisement.objects.filter(section=section)
        return advertisement

class AdvertisementDetailView(generics.RetrieveAPIView):
    queryset = Advertisement.objects.filter()
    serializer_class = AdvertisementDetailSerializer

class AdvertisementCreateView(generics.CreateAPIView):
    serializer_class = AdvertisementCreateSerializer
