from django.contrib.auth.models import User  # noqa
from django.db import models


class Home(models.Model):
    category = models.CharField(max_length=90, default='Idiomas')
    intro_description = models.CharField(max_length=50)

    def __str__(self):
        return self.intro_description


class More(models.Model):
    more_description = models.CharField(max_length=255)

    def __str__(self):
        return self.more_description


class Skills(models.Model):
    tag_span = models.CharField(max_length=70)
    skills_description = models.CharField(max_length=200)

    def __str__(self):
        return self.skills_description


class Projects(models.Model):
    tag = models.CharField(max_length=30, default='#Front-End')
    title = models.CharField(max_length=200)
    image_project = models.CharField(max_length=300)
    alt_image = models.CharField(max_length=100)
    link_previw = models.CharField(max_length=300)
    link_github = models.CharField(max_length=300)
    description_project = models.CharField(
        max_length=120, default='Description for project'
    )
    skills = models.CharField(max_length=120, default='Skills')

    def __str__(self):
        return self.title
