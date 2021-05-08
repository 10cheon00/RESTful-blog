from rest_framework.generics import ListCreateAPIView

from blog.models import Post
from blog.serializers import PostSerializer


class PostListAPIView(ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
