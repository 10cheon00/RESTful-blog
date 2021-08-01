from rest_framework.generics import GenericAPIView
from rest_framework.mixins import ListModelMixin
from rest_framework.mixins import RetrieveModelMixin
from rest_framework.mixins import CreateModelMixin
from rest_framework.mixins import UpdateModelMixin
from rest_framework.mixins import DestroyModelMixin
from rest_framework.permissions import AllowAny
from rest_framework.permissions import BasePermission

from backend.articles.models import Article
from backend.articles.serializers import ArticleSerializer


class ReadOnlyArticleAPIView(
    ListModelMixin,
    RetrieveModelMixin,
    GenericAPIView
):
    lookup_field = 'id'
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    authentication_classes = []
    permission_calsses = [AllowAny]

    def get(self, request, *args, **kwargs):
        if kwargs.get('id'):
            return self.retrieve(request, *args, **kwargs)
        return self.list(request, *args, **kwargs)


class IsOwner(BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.author.user == request.user


class WriteOnlyArticleAPIView(
    CreateModelMixin,
    UpdateModelMixin,
    DestroyModelMixin,
    GenericAPIView
):
    lookup_field = 'id'
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = [IsOwner]

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)
