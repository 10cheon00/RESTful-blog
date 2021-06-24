from rest_framework import serializers

from django.contrib.auth.models import User
from django.http import HttpResponse

from backend.profiles.models import Profile


class ProfileSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=20)

    nickname = serializers.CharField(max_length=20)

    password = serializers.CharField(write_only=True)

    password_confirmation = serializers.CharField(write_only=True)

    def save(self):
        username = self.validated_data.get('username')

        # TODO check already exists username.
        # 참고
        # https://eunjin3786.tistory.com/270
        if User.objects.filter(username=username):
            pass

        user = User.objects.create_user(
            username=username,
            password=self.validated_data.get('password')
        )

        # TODO check already exists nickname.

        profile = Profile(
            user=user,
            nickname=self.validated_data.get('nickname')
        )
        profile.save()

        return profile
