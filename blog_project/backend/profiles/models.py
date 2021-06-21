from django.contrib.auth.models import User
from django.db import models


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    nickname = models.CharField(max_length=20, default='')

    class Meta:
        ordering = ['nickname']

    def __str__(self):
        return self.user.username
