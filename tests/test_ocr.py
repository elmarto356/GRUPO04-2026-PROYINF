import unittest
import requests

class TestOCR(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.base_url = "http://api:8080/api/ocr"

    @classmethod
    def tearDownClass(cls):
        pass