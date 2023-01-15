from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('blog.urls', namespace='blog')),
    path('api/user/', include('users.urls', namespace='users')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) 
# tells Django where to find user-uploaded images when the project is still in the development stage.

# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView,
# )

    # path('', include('blog.urls', namespace='blog')),
    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    # # login authentication below
    # path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # # provides access token every so often below
    # path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),