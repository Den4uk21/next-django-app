from django.contrib import admin
from .models import Category, Section, Advertisement, AdvertisementImage

# Register your models here.
admin.site.register(Category)
admin.site.register(Section)
admin.site.register(Advertisement)
admin.site.register(AdvertisementImage)