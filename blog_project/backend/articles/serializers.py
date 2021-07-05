from django.utils import timezone

from rest_framework import serializers

from backend.articles.models import Article


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = [
            'id',
            'title',
            'create_at',
            'content',
            'last_modified_at',
        ]

    def update(self, instance, validated_data):
        validated_data['last_modified_at'] = timezone.now()
        return super().update(instance, validated_data)
