from django.db import models
from django.utils import timezone


class Post(models.Model):
    title = models.CharField(max_length=100)
    create_at = models.DateTimeField(default=timezone.now)

    class Meta:
        ordering = ['-create_at']

    def __str__(self):
        return self.title
