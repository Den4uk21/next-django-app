from uuid import uuid4
from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    email = models.EmailField(unique=True)
    avatar = models.ImageField(upload_to='users', blank=True)
    phone = models.PositiveIntegerField(unique=True, null=True, blank=True)
    location = models.CharField(max_length=50, blank=True)
    is_active = models.BooleanField(default=False)
