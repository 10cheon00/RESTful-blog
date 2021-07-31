from django.urls import path

from backend.articles.views import ReadOnlyArticleAPIView
from backend.articles.views import WriteOnlyArticleAPIView


app_name = 'articles'

urlpatterns = [
    # todo
    # Convert to custom router.
    path(
        'list/',
        ReadOnlyArticleAPIView.as_view(),
        name="read_only_article"
    ),
    path(
        'retrieve/<int:id>/',
        ReadOnlyArticleAPIView.as_view(),
        name="read_only_article"
    ),
    path(
        'create/',
        WriteOnlyArticleAPIView.as_view(),
        name="write_only_article"
    ),
    path(
        'update/<int:id>/',
        WriteOnlyArticleAPIView.as_view(),
        name="write_only_article"
    ),
    path(
        'destroy/<int:id>/',
        WriteOnlyArticleAPIView.as_view(),
        name="write_only_article"
    ),
]
