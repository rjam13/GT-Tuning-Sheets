from django.urls import path
from .views import TuningSheetList, getTuningSheetDetail

app_name = 'blog_api'

urlpatterns = [
    # path('<int:pk>/create/', TuningSheetDetail.as_view(), name='detailcreate'),
    # path('<int:pk>/', getTuningSheetDetail, name='detailget'),
    # path('', TuningSheetList.as_view(), name='listcreate'),
    path('<int:pk>/', getTuningSheetDetail),
    path('', TuningSheetList),
]