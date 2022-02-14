from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny

from .serializers import RegisterSerializer
from rest_framework.generics import CreateAPIView


class RegisterView(CreateAPIView):
    """
    View que usa template genérico do django_rest_framework para criar um usuário
    """
    queryset = User.objects.all()
    permission_classes = (AllowAny,)  # qualquer pessoa pode chamar esse endpoint
    serializer_class = RegisterSerializer
