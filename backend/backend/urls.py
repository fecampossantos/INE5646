from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-token-auth/', obtain_auth_token, name='api_toke_auth'),
    path('user/', include('user_management.urls')),
    path('example/', include('example.urls')),
]
