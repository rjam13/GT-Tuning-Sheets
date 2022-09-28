from rest_framework import serializers
from blog.models import TuningSheet

class TuningSheetSerializer(serializers.ModelSerializer):
    class Meta:
        model = TuningSheet
        exclude = ['slug']
        # below are elements that accessible from the frontend
        # fields = ('car', 
        # 'title', 
        # 'excerpt', 
        # 'published', 
        # 'author', 
        # 'status', 
        # 'performance_points', 
        # 'tyres_front', 
        # 'tyres_rear', 
        # 'suspension', 
        # 'height_front', 
        # 'height_rear', 
        # 'anti_roll_bar_front', 
        # 'anti_roll_bar_rear', 
        # 'compression_front', 
        # 'compression_rear', 
        # 'expansion_front', 
        # 'expansion_rear', 
        # 'natural_frequency_front', 
        # 'natural_frequency_rear', 
        # 'camber_front', 
        # 'camber_rear', 
        # 'differential', 
        # 'initial_torque_front', 
        # 'initial_torque_rear', 
        # 'accel_sensitivity_front', 
        # 'accel_sensitivity_rear', 
        # 'braking_sensitivity_front', 
        # 'braking_sensitivity_rear', 
        # 'tvc_differential', 
        # 'front_rear_torque_distribution') 