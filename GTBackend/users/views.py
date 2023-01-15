from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from .serializers import RegisterUserSerializer, LoginUserSerializer
from rest_framework.authentication import get_authorization_header
from rest_framework.permissions import AllowAny
from rest_framework import exceptions
# from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from .models import BlackListedToken
from .jwt import JWTAuthentication

# Authenticating User


class AuthUserAPIView(GenericAPIView):

    # IsAuthenticated requires that the call should have a token
    # note: comma is needed after the last item in tuple
    permission_classes= (permissions.IsAuthenticated,)

    def get(self, request):
        user = request.user
        serializer = LoginUserSerializer(user)
        return Response({'user': serializer.data})

# User Registration


class CustomUserRegister(APIView):
    permission_classes = [AllowAny]
    authentication_classes = ()

    def post(self, request):
        serializer = RegisterUserSerializer(data=request.data)
        if serializer.is_valid():
            newUser = serializer.save()
            if newUser:
                # return Response(status=status.HTTP_201_CREATED)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# User Login


class CustomUserLogin(GenericAPIView):
    authentication_classes = ()

    def post(self, request):
        username = request.data.get('username', None)
        password = request.data.get('password', None)

        user = authenticate(username=username, password=password)

        if user:
            serializer = LoginUserSerializer(user)
            # Response includes jwt token
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({"message": "Invalid Credentials, try again"}, status=status.HTTP_401_UNAUTHORIZED)

# User Logout


class CustomUserLogout(GenericAPIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request):
        (user, token) = JWTAuthentication.authenticate(self, request)

        blt = BlackListedToken(token=token, user=user)
        blt.save()

        return Response({"message": "Logged out successfully"}, status=status.HTTP_200_OK)


# class BlacklistTokenUpdateView(APIView):
#     permission_classes = [AllowAny]
#     authentication_classes = ()

#     def post(self, request):
#         try:
#             refresh_token = request.data["refresh_token"]
#             token = RefreshToken(refresh_token)
#             token.blacklist()
#             return Response(status=status.HTTP_205_RESET_CONTENT)
#         except Exception as e:
#             return Response(status=status.HTTP_400_BAD_REQUEST)
