from django.urls import path
from .views import ProtectedHelloView, PublicHelloView

urlpatterns = [
    path('public_hello/', PublicHelloView.as_view(), name='public_hello'),
    path('protected_hello/', ProtectedHelloView.as_view(), name='protected_hello'),
]
