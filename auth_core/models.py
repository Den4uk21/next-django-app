from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    avatar = models.ImageField(upload_to='users', blank=True)
    phone = models.PositiveIntegerField(null=True, blank=True)
    location = models.TextField(blank=True)
