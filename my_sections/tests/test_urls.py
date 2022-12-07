from django.test import TestCase
from django.urls import reverse

portfolio_url = reverse('my_sections:portfolio')


class PortfolioURLsTest(TestCase):
    def test_portfolio_url_home_is_correct(self):
        self.assertEqual(portfolio_url, '/')

    def test_if_the_url_status_is_equal_to_200(self):
        self.client.get(portfolio_url)
