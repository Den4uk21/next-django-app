from django.conf.urls import url
from rest_framework_simplejwt import views
from .serializers import CustomTokenCreateSerializer, CustomTokenRefreshSerializer

class CustomTokenCreateView(views.TokenObtainPairView):
    serializer_class = CustomTokenCreateSerializer

class CustomTokenRefreshView(views.TokenRefreshView):
    serializer_class = CustomTokenRefreshSerializer

urlpatterns = [
    url('jwt/create/', CustomTokenCreateView.as_view(), name="jwt-create"),
    url('jwt/refresh/', CustomTokenRefreshView.as_view(), name="jwt-refresh"),
]
