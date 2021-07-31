from rest_framework_simplejwt.views import TokenRefreshView

from django.urls import path

from backend.profiles.views import SignUpAPIView
from backend.profiles.views import ReturnProfileIfTokenVerifiedAPIView
from backend.profiles.views import ReturnProfileIfLoginSuccess

app_name = 'profiles'

urlpatterns = [
    path('', ReturnProfileIfLoginSuccess.as_view()),
    path('refresh/', TokenRefreshView.as_view()),
    path('verify/', ReturnProfileIfTokenVerifiedAPIView.as_view()),
    path('signup/', SignUpAPIView.as_view()),
]
