from rest_framework.authentication import get_authorization_header, BaseAuthentication
from rest_framework.permissions import BasePermission
from rest_framework import exceptions
from users.models import User, BlackListedToken
import jwt

from django.conf import settings

# Here contains all classes pertaining to user authentication.


class JWTAuthentication(BaseAuthentication):
    def authenticate(self, request):

        # getting token from header
        auth_header = get_authorization_header(request)
        auth_data = auth_header.decode('utf-8')
        try:
            auth_token = auth_data.split(" ")
            token = auth_token[1]

            if len(auth_token) != 2:
                raise exceptions.AuthenticationFailed('Token not valid')

            # getting info from token
            payload = jwt.decode(
                token, settings.SECRET_KEY, algorithms="HS256")

            # getting username from info
            username = payload['username']
            user = User.objects.get(username=username)
            # Would throw an error if the token exists in database
            if BlackListedToken.objects.filter(user=user, token=token).exists():
                raise exceptions.AuthenticationFailed(
                    "Token is invalid."
                )

            return (user, token)

        except IndexError:
            raise exceptions.AuthenticationFailed(
                "Token error, login again."
            )

        except jwt.ExpiredSignatureError:
            raise exceptions.AuthenticationFailed(
                "Token is expired, login again."
            )

        except jwt.DecodeError:
            raise exceptions.AuthenticationFailed(
                "Token is invalid."
            )

        except User.DoesNotExist:
            raise exceptions.AuthenticationFailed(
                "Unknown User"
            )


# class IsTokenValid(BasePermission):
#     def has_permission(self, request, view):
#         user_id = request.user.id
#         is_allowed_user = True
#         token = request.auth.decode("utf-8")
#         try:
#             is_blackListed = BlackListedToken.objects.get(
#                 user=user_id, token=token)
#             if is_blackListed:
#                 is_allowed_user = False
#         except BlackListedToken.DoesNotExist:
#             is_allowed_user = True
#         return is_allowed_user
