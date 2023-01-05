from django.urls import path
from .views import CustomUserRegister, CustomUserLogin, BlacklistTokenUpdateView

app_name = 'users'

urlpatterns = [
    path('register/', CustomUserRegister.as_view(), name='register_user'),
    path('login/', CustomUserLogin.as_view(), name='login_user'),
    path('logout/blacklist/', BlacklistTokenUpdateView.as_view(),
         name='blacklist'),
]
