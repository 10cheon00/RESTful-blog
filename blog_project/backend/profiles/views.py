from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenVerifyView
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.authentication import JWTAuthentication

from backend.profiles.serializers import ProfileSerializer
from backend.profiles.models import Profile


class SignUpAPIView(APIView):
    serializer_class = ProfileSerializer
    authentication_classes = []
    permission_classes = [AllowAny]

    def post(self, request):
        password = request.data.get('password')
        password_confirmation = request.data.get('password_confirmation')

        if password != password_confirmation:
            return Response({'error': '비밀번호가 일치하지 않습니다. '})

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)


class ReturnProfileIfLoginSuccess(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        raw_token = response.data.get('access')
        profile = get_profile_if_token_is_verified(raw_token)
        response.data['profile'] = profile
        return response


class ReturnProfileIfTokenVerifiedAPIView(TokenVerifyView):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)

        raw_token = request.data.get('token')
        profile = get_profile_if_token_is_verified(raw_token)
        response.data['profile'] = profile
        return response


def get_profile_if_token_is_verified(raw_token):
    authenticator = JWTAuthentication()
    validated_token = authenticator.get_validated_token(raw_token)
    user = authenticator.get_user(validated_token)

    profile = Profile.objects.get(user__id=user.id)
    return {
        'id': profile.id,
        'name': profile.user.username,
        'nickname': profile.nickname,
    }
