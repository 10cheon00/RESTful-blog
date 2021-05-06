import datetime

from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=100)
    create_at = models.DateTimeField(default=datetime.datetime)

    class Meta:
        ordering = ['-create_at']

    def __str__(self):
        return self.title
