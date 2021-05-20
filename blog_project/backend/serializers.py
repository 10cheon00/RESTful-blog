from rest_framework import serializers

from backend.models import Article


class ArticleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Article
        fields = ['url', 'id', 'title', 'create_at', 'content']
