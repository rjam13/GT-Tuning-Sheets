from django.contrib import admin
from django.contrib.auth.models import User
from . import models

@admin.register(models.User)
class UserAdmin(admin.ModelAdmin):
    list_display = (
      'username',
      'email',
      'is_staff',
      'is_active',
      'date_joined',
      'email_verified')
