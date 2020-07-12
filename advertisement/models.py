from django.db import models
from django.utils import timezone
from auth_core.models import User

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=50)
    url = models.SlugField()
    image = models.ImageField(upload_to='categories')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Categories'

class Section(models.Model):
    name = models.CharField(max_length=50)
    url = models.SlugField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Advertisement(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    description = models.TextField()
    section = models.ForeignKey(Section, on_delete=models.SET_NULL, null=True)
    price = models.PositiveSmallIntegerField()
    delivery = models.BooleanField(default=False)
    pub_date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title

class AdvertisementImage(models.Model):
    image = models.ImageField(upload_to='advertisements')
    advertisement = models.ForeignKey(Advertisement, on_delete=models.CASCADE, related_name='images')

    def __str__(self):
        return '{} > Image'.format(self.advertisement)
