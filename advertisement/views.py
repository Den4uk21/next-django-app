from rest_framework import generics
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend
from .models import Category, Section, Advertisement
from .serializers import (
    CategoriesListSerializer,
    SectionsListSerializer,
    AdvertisementsListSerializer,
    AdvertisementDetailSerializer,
    AdvertisementCreateSerializer
)
from .service import AdvertisementsFilter, AdvertisementsPagination

# Create your views here.
class CategoriesListView(generics.ListAPIView):
    serializer_class = CategoriesListSerializer
    queryset = Category.objects.all()

class SectionsListView(generics.ListAPIView):
    serializer_class = SectionsListSerializer

    def get_queryset(self):
        category_url = self.kwargs['category_url']
        category = Category.objects.get(url=category_url)
        sections = Section.objects.filter(category=category)
        return sections

class AdvertisementsListView(generics.ListAPIView):
    serializer_class = AdvertisementsListSerializer
    pagination_class = AdvertisementsPagination

    filter_backends = (DjangoFilterBackend, SearchFilter)
    filterset_class = AdvertisementsFilter
    search_fields = ('title',)

    def get_queryset(self):
        section_url = self.kwargs['section_url']
        section = Section.objects.get(url=section_url)
        advertisement = Advertisement.objects.filter(section=section)
        return advertisement

class AdvertisementDetailView(generics.RetrieveAPIView):
    serializer_class = AdvertisementDetailSerializer
    queryset = Advertisement.objects.filter()

class AdvertisementCreateView(generics.CreateAPIView):
    serializer_class = AdvertisementCreateSerializer
