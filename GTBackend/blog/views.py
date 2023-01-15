# from lib2to3.pytree import Base
# from rest_framework import generics
# from rest_framework.permissions import DjangoModelPermissionsOrAnonReadOnly, BasePermission, SAFE_METHODS, IsAuthenticated
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status
from rest_framework.response import Response
from rest_framework.generics import GenericAPIView


from blog.models import TuningSheet
from .serializers import TuningSheetSerializer
# from rest_framework.decorators import api_view

# def getTuningSheetDetail(request, pk):
class getTuningSheetDetail(GenericAPIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    authentication_classes = ()

    # Gets the specific tuning, tyre choices, suspension choices, and differential choices
    # if request.method == 'GET':
    def get(self, request, pk):
        try:
            sheet = TuningSheet.objects.get(id=pk)
        except TuningSheet.DoesNotExist:
            return JsonResponse({'message': 'The tuning sheet does not exist'}, status=status.HTTP_404_NOT_FOUND)

        def getChoice(choice):
            return choice[0]
        tyre_choices = map(getChoice, TuningSheet.TYRE_CHOICES)
        suspension_choices = map(getChoice, TuningSheet.SUS_CHOICES)
        differential_choices = map(getChoice, TuningSheet.DIF_CHOICES)

        sheet_serializer = TuningSheetSerializer(sheet, many=False)

        return Response({
            'sheet': sheet_serializer.data,
            'tyre_choices': tyre_choices,
            'suspension_choices': suspension_choices,
            'differential_choices': differential_choices,
        }, status=status.HTTP_200_OK)

    # Updates the specific sheet
    # elif request.method == 'PUT':
    def put(self, request, pk):
        try:
            sheet = TuningSheet.objects.get(id=pk)
        except TuningSheet.DoesNotExist:
            return JsonResponse({'message': 'The tuning sheet does not exist'}, status=status.HTTP_404_NOT_FOUND)

        sheet_data = JSONParser().parse(request)
        sheet_serializer = TuningSheetSerializer(sheet, data=sheet_data)
        if sheet_serializer.is_valid():
            sheet_serializer.save()
            return JsonResponse(sheet_serializer.data)
        return JsonResponse(sheet_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # elif request.method == 'DELETE':
    def delete(self, request, pk):
        try:
            sheet = TuningSheet.objects.get(id=pk)
        except TuningSheet.DoesNotExist:
            return JsonResponse({'message': 'The tuning sheet does not exist'}, status=status.HTTP_404_NOT_FOUND)

        sheet.delete()
        return JsonResponse({'message': 'Tuning sheet was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)


# @api_view(['GET', 'POST'])
# def TuningSheetList(request):
class TuningSheetList(GenericAPIView):
    authentication_classes = ()
    # Gets all sheets or a filtered list of sheets
    # if request.method == 'GET':
    def get(self, request):

        sheets = TuningSheet.objects.all()

        title = request.query_params.get('title', None)
        if title is not None:
            sheets = sheets.filter(title__icontains=title)

        sheets_serializer = TuningSheetSerializer(sheets, many=True)
        return JsonResponse(sheets_serializer.data, safe=False)
        # 'safe=False' for objects serialization

    # Creates a new tuning sheet
    # elif request.method == 'POST':
    def post(self, request):
        sheet_data = JSONParser().parse(request)
        sheet_serializer = TuningSheetSerializer(data=sheet_data)
        if sheet_serializer.is_valid():
            sheet_serializer.save()
            return JsonResponse(sheet_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(sheet_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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

# class SheetUserWritePermission(BasePermission):
#     message = 'Editing tuning sheets is restricted to the author only.'

#     def has_object_permission(self, request, view, obj):

#         # is they just want to GET, allow them through
#         if request.method in SAFE_METHODS:
#             return True

#         # anything else, we have to check if they're the author
#         return obj.author == request.user

# class TuningSheetList(generics.ListCreateAPIView):
#     permission_classes = [IsAuthenticated]
#     # accesses the manager within post so that we can retrieve all the published posts
#     queryset = TuningSheet.tuningsheetobjects.all()
#     serializer_class = TuningSheetSerializer

# # change what is after generics. to change the abilities
# class TuningSheetDetail(generics.RetrieveDestroyAPIView, SheetUserWritePermission):
#     permission_classes = [SheetUserWritePermission]
#     queryset = TuningSheet.objects.all()
#     serializer_class = TuningSheetSerializer
