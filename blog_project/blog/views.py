from rest_framework import viewsets

from blog.models import Post
from blog.serializers import PostSerializer


"""
APIView vs ViewSet

list, create, detail, 등의 액션을 구현 = ViewSet.
get, post, put 등의 http 메소드를 구현 = APIView.
ViewSet은 간단한 구현 시에 사용하라고 한다.
APIView가 저수준이므로 복잡한 구현 시에 사용하라고 한다.
"""


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
