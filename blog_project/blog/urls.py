from django.urls import path

from blog.views import PostListCreateAPIView


urlpatterns = [
    path('', view=PostListCreateAPIView.as_view(), name="post_list"),
]
