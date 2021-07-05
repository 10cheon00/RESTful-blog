from django.urls import path

from backend.articles.views import ListCreateArticleAPIView
from backend.articles.views import RetrieveUpdateDestroyArticleAPIView


app_name = 'articles'

urlpatterns = [
    path(
        '',
        ListCreateArticleAPIView.as_view(),
        name="list_create_article"
    ),
    path(
        '<int:pk>/',
        RetrieveUpdateDestroyArticleAPIView.as_view(),
        name="retrieve_update_destroy_article"
    ),
]
