from django.contrib import admin
from . import models

@admin.register(models.TuningSheet)
class TuningSheetAdmin(admin.ModelAdmin):
    # This part shows what attributes appear on the list view of all the tuning sheets
    list_display = (
      'title', 
      'author',
      'car', 
      'performance_points',
      'slug', 
      'status',)
    # creates the slug using the title attribute
    prepopulated_fields = {'slug': ('title',), }

admin.site.register(models.Car)