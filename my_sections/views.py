from django.shortcuts import render
from my_sections.models import Home, More, Skills, Projects
from django.utils import translation


def portfolio(request):
    home = Home.objects.all()
    more = More.objects.all()
    skills = Skills.objects.all()
    projects = Projects.objects.all()
    html_language = translation.get_language()

    context = {
        'home': home,
        'more': more,
        'skills': skills,
        'projects': projects,
        'html_language': html_language,
    }

    return render(
        request,
        "my_sections/pages/base.html",
        context
    )


def handler404(request, exception):
    return render(request, "my_sections/page_404/index.html", status=404)
