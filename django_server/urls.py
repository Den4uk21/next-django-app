'''django_server URL Configuration'''

from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from .yasg import urlpatterns as doc_urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api_core/', include('rest_framework.urls')),

    path('api/v1/auth/', include('djoser.urls')),
    path('api/v1/auth/', include('auth_core.jwt')),

    path('api/v1/advertisement/', include('advertisement.urls'))
]

urlpatterns += doc_urls

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
