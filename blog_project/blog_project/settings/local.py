import datetime

from blog_project.settings.base import *

ALLOWED_HOSTS += ['*']

INSTALLED_APPS += [
    'corsheaders',  # for cors policy
    'rest_framework',
    'backend.articles',
    'backend.profiles',
]

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework_jwt.authentication.JSONWebTokenAuthentication'
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ]
}

# https://dev-yakuza.posstree.com/ko/django/jwt/
JWT_AUTH = {
    'JWT_SECRET_KEY': SECRET_KEY,
    'JWT_ALGORITHM': 'HS256',
    'JWT_ALLOW_REFRESH': True,
    'JWT_EXPIRATION_DELTA': datetime.timedelta(days=7),
    'JWT_REFRESH_EXPIRATION_DELTA': datetime.timedelta(days=28),
}

CORS_ORIGIN_ALLOW_ALL = True

CORS_ORIGIN_WHITELIST = [
    'http://vue-blog.run.goorm.io:8080',
]

CORS_ALLOW_CREDENTIALS = True
