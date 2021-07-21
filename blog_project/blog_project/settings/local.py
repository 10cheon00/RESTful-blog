from datetime import timedelta

from blog_project.settings.base import *


ALLOWED_HOSTS += ['*']

INSTALLED_APPS += [
    'corsheaders',  # for cors policy
    'rest_framework',
    'backend.articles',
    'backend.profiles',
]

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticatedOrReadOnly',
    ),
}

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(seconds=10),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=7),
    'ROTATE_REFRESH_TOKENS': False,
    'BLACKLIST_AFTER_ROTATION': True,
}

CORS_ORIGIN_ALLOW_ALL = True

CORS_ORIGIN_WHITELIST = [
    'http://vue-blog.run.goorm.io:8080',
]

CORS_ALLOW_CREDENTIALS = True
