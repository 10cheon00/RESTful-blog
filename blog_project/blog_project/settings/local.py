from blog_project.settings.base import *


ALLOWED_HOSTS += ['*']

INSTALLED_APPS += [
    'rest_framework',
    'blog',
]

CORS_ORIGIN_ALLOW_ALL = True

CORS_ORIGIN_WHITELIST = [
    'http://vueblog.run.goorm.io:8080',
]

CORS_ALLOW_CREDENTIALS = True
