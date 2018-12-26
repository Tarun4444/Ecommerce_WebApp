from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

class Ecommerce:
    def index(self):
        return HttpResponse("HelloWorld")
