import unittest
import requests
import os

class TestOCR(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.base_url = "http://api:8080/api/ocr"
        cls.imagen_path = os.path.join(os.path.dirname(__file__), "liquidacion_test.jpg")

    @classmethod
    def tearDownClass(cls):
        pass

    def test_formato_invalido(self):
        #prueba 2 HU2: archivo .txt debe ser rechazado con error de formato
        archivo_txt = ("documento", ("test.txt", b"contenido de prueba", "text/plain"))
        respuesta = requests.post(self.base_url, files=[archivo_txt])
        self.assertEqual(respuesta.status_code, 400)
        datos = respuesta.json()
        self.assertFalse(datos["ok"])
        self.assertIn("Formato", datos["error"])

    def test_imagen_valida(self):
        #prueba 1 HU2: imagen .jpg válida debe retornar RUT y Monto Liquido
        with open(self.imagen_path, "rb") as img:
            respuesta = requests.post(self.base_url, files={"documento": ("liquidacion_test.jpg", img, "image/jpeg")})
        self.assertEqual(respuesta.status_code, 200)
        datos = respuesta.json()
        self.assertTrue(datos["ok"])
        self.assertIsNotNone(datos["datosExtraidos"]["rut"])
        self.assertIsNotNone(datos["datosExtraidos"]["montoLiquido"])