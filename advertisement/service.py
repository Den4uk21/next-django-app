from django_filters import rest_framework as filters
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from .models import Advertisement

class AdvertisementsFilter(filters.FilterSet):
    price = filters.RangeFilter()
    delivery = filters.BooleanFilter()
    pub_date = filters.DateRangeFilter()

    class Meta:
        model = Advertisement
        fields = ('price', 'delivery', 'pub_date',)

class AdvertisementsPagination(PageNumberPagination):
    page_size = 12

    def get_paginated_response(self, data):
        return Response({
            'count': self.page.paginator.count,
            'result': data
        })
