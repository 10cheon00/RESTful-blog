from django.urls import path, include
from rest_framework import routers

from backend.articles.views import ArticleViewSet

router = routers.DefaultRouter()
router.register(r'articles', ArticleViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('profiles/', include('backend.profiles.urls', namespace='profiles')),
]
