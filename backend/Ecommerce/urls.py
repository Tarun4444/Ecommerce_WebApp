from django.urls import path
from Ecommerce.views import Ecommerce


urlpatterns = [
    path('', Ecommerce.index, name='index'),
]