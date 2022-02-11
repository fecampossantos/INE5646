from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny


class PublicHelloView(APIView):
    permission_classes = (AllowAny,)

    def get(self, request):
        content = {'message': 'Hello, World!'}
        return Response(content)


class ProtectedHelloView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        content = {'message': 'Hello, Protected World!'}
        return Response(content)
