from rest_framework import viewsets

from backend.models import Article
from backend.serializers import ArticleSerializer


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
