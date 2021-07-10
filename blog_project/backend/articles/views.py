from rest_framework import viewsets
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.generics import ListCreateAPIView
from rest_framework.generics import RetrieveUpdateDestroyAPIView

from backend.articles.models import Article
from backend.articles.serializers import ArticleSerializer


"""
APIView vs ViewSet

list, create, detail, 등의 액션을 구현 = ViewSet.
get, post, put 등의 http 메소드를 구현 = APIView.
ViewSet은 간단한 구현 시에 사용하라고 한다.
APIView가 저수준이므로 복잡한 구현 시에 사용하라고 한다.
"""


class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]


class ListCreateArticleAPIView(ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class RetrieveUpdateDestroyArticleAPIView(RetrieveUpdateDestroyAPIView):
    lookup_field = 'id'
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()

    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)
