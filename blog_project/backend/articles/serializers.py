from rest_framework import serializers

from backend.articles.models import Article


class ArticleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Article
        fields = [
            'url',
            'id',
            'title',
            'create_at',
            'content',
            'last_modified_at',
        ]
