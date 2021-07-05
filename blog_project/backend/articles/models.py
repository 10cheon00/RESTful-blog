from django.db import models
from django.utils import timezone

from backend.profiles.models import Profile


class Article(models.Model):
    title = models.CharField(max_length=100, default='')

    content = models.TextField(max_length=100000, default='')

    create_at = models.DateTimeField(default=timezone.now)

    last_modified_at = models.DateTimeField(default=timezone.now)

    class Meta:
        ordering = ['-create_at']

    def __str__(self):
        return self.title
