from django.contrib import admin
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


@admin.register(models.BlackListedToken)
class BlackListedTokenAdmin(admin.ModelAdmin):
    list_display = (
        'token',
        'user',
        'timestamp')
