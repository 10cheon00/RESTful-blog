from django.urls import path, include


urlpatterns = [
    path('articles/', include('backend.articles.urls', namespace='articles')),
    path('profiles/', include('backend.profiles.urls', namespace='profiles')),
]
