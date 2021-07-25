from rest_framework.generics import ListCreateAPIView
from rest_framework.generics import RetrieveUpdateDestroyAPIView
from rest_framework.permissions import BasePermission

from backend.articles.models import Article
from backend.articles.serializers import ArticleSerializer


"""
APIView vs ViewSet

list, create, detail, 등의 액션을 구현 = ViewSet.
get, post, put 등의 http 메소드를 구현 = APIView.
ViewSet은 간단한 구현 시에 사용하라고 한다.
APIView가 저수준이므로 복잡한 구현 시에 사용하라고 한다.
"""


class ListCreateArticleAPIView(ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    def create(self, request, *args, **kwargs):
        request.data['author'] = request.user.profile.id
        return super().create(request, *args, **kwargs)


class IsOwnerOrReadOnly(BasePermission):
    def has_object_permission(self, request, view, obj):
        from rest_framework.permissions import SAFE_METHODS

        if request.method in SAFE_METHODS:
            return True

        return obj.author.user.id == request.user.id


class RetrieveUpdateDestroyArticleAPIView(RetrieveUpdateDestroyAPIView):
    lookup_field = 'id'
    serializer_class = ArticleSerializer
    permission_classes = [IsOwnerOrReadOnly]
    queryset = Article.objects.all()

    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)
