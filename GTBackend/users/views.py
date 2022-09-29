from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import RegisterUserSerializer
from rest_framework.permissions import AllowAny

class CustomUserCreate(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        reg_serializer = RegisterUserSerializer(data=request.data)
        if reg_serializer.is_valid():
            newUser = reg_serializer.save()
            if newUser:
                return Response(status=status.HTTP_201_CREATED)
        return Response(reg_serializer.errors, stattus=status.HTTP_400_BAD_REQUEST)