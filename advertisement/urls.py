from django.urls import path
from . import views

urlpatterns = [
    path('categories/', views.CategoriesListView.as_view()),
    path('categories/<str:category_url>/', views.SectionsListView.as_view()),
    path('list/<str:section_url>/', views.AdvertisementListView.as_view()),
    path('detail/<int:pk>/', views.AdvertisementDetailView.as_view()),
    path('create/', views.AdvertisementCreateView.as_view())
]
