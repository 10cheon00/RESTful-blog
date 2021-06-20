from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from backend.profiles.serializers import ProfileSerializer


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


class LoginAPIView(APIView):
    pass
