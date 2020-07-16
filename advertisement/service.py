from django_filters import rest_framework as filters
from .models import Advertisement

class AdvertisementFilter(filters.FilterSet):
    price = filters.RangeFilter()
    delivery = filters.BooleanFilter()    
    pub_date = filters.DateRangeFilter()

    class Meta:
        model = Advertisement
        fields = ('price', 'delivery', 'pub_date',)
