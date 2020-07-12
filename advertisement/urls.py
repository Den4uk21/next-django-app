from django.urls import path
from . import views

urlpatterns = [
    path('categories/', views.CategoriesListView.as_view()),
    path('categories/<str:category_url>/', views.SectionsListView.as_view()),
    path('<str:section_url>/', views.AdvertisementListView.as_view()),
    path('<str:section_url>/<int:advertisement_id>/', views.AdvertisementDetailView.as_view())
]
