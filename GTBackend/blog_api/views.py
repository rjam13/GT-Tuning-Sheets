from lib2to3.pytree import Base
from rest_framework import generics
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from blog.models import TuningSheet
from .serializers import TuningSheetSerializer
from rest_framework.permissions import DjangoModelPermissionsOrAnonReadOnly, BasePermission, SAFE_METHODS, IsAuthenticated

class SheetUserWritePermission(BasePermission):
    message = 'Editing tuning sheets is restricted to the author only.'

    def has_object_permission(self, request, view, obj):

        # is they just want to GET, allow them through
        if request.method in SAFE_METHODS:
            return True

        # anything else, we have to check if they're the author
        return obj.author == request.user

class TuningSheetList(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    # accesses the manager within post so that we can retrieve all the published posts
    queryset = TuningSheet.tuningsheetobjects.all()
    serializer_class = TuningSheetSerializer

# change what is after generics. to change the abilities
class TuningSheetDetail(generics.RetrieveDestroyAPIView, SheetUserWritePermission):
    permission_classes = [SheetUserWritePermission]
    queryset = TuningSheet.objects.all()
    serializer_class = TuningSheetSerializer

# This view gets the specific tuning, 
# tyre choices, suspension choices, and differential choices
@api_view(['GET'])
def getTuningSheetDetail(request, pk):
    sheet = TuningSheet.objects.get(id=pk)
    serializer = TuningSheetSerializer(sheet, many=False)

    def getChoice(choice):
        return choice[0]

    tyre_choices = map(getChoice, TuningSheet.TYRE_CHOICES)
    suspension_choices = map(getChoice, TuningSheet.SUS_CHOICES)
    differential_choices = map(getChoice, TuningSheet.DIF_CHOICES)

    return Response({
        'sheet': serializer.data, 
        'tyre_choices': tyre_choices,
        'suspension_choices': suspension_choices,
        'differential_choices': differential_choices,
        }, status=status.HTTP_200_OK)
    



""" Concrete View Classes
#CreateAPIView
Used for create-only endpoints.
#ListAPIView
Used for read-only endpoints to represent a collection of model instances.
#RetrieveAPIView
Used for read-only endpoints to represent a single model instance.
#DestroyAPIView
Used for delete-only endpoints for a single model instance.
#UpdateAPIView
Used for update-only endpoints for a single model instance.
##ListCreateAPIView
Used for read-write endpoints to represent a collection of model instances.
RetrieveUpdateAPIView
Used for read or update endpoints to represent a single model instance.
#RetrieveDestroyAPIView
Used for read or delete endpoints to represent a single model instance.
#RetrieveUpdateDestroyAPIView
Used for read-write-delete endpoints to represent a single model instance.
"""