from django.db import models
from django.utils import timezone


class Article(models.Model):
    title = models.CharField(max_length=100, default='')

    create_at = models.DateTimeField(default=timezone.now)

    content = models.TextField(max_length=100000, default='')

    class Meta:
        ordering = ['-create_at']

    def __str__(self):
        return self.title
