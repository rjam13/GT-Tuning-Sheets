from rest_framework import serializers
from .models import User

class RegisterUserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(
        max_length=120, min_length=6, write_only=True
    )

    class Meta:
        model = User
        fields = ('username', 'email', 'password')

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance