from django.urls import path
from .views import CustomUserRegister, CustomUserLogin, CustomUserLogout, AuthUserAPIView
# , BlacklistTokenUpdateView

app_name = 'users'

urlpatterns = [
    path('register/', CustomUserRegister.as_view(), name='register_user'),
    path('login/', CustomUserLogin.as_view(), name='login_user'),
    path('logout/', CustomUserLogout.as_view(), name='logout_user'),
    path('auth/', AuthUserAPIView.as_view(), name='auth_user'),
    # path('logout/blacklist/', BlacklistTokenUpdateView.as_view(),
    #      name='blacklist'),
]
