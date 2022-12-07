from django.urls import path
from . import views

app_name = 'my_sections'

urlpatterns = [
    path('', views.portfolio, name='portfolio')
]
