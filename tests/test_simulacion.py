import unittest
import requests

class TestSimulacion(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.base_url = "http://api:8080/api/simulations"

    @classmethod
    def tearDownClass(cls):
        pass

    def test_cuota_optima(self):
        #prueba 1 HU1: cuota <= 25% del sueldo debe retornar esOptimo true
        respuesta = requests.post(self.base_url, json={
            "amount": 500000,
            "months": 60,
            "income": 1000000
        })
        self.assertEqual(respuesta.status_code, 200)
        datos = respuesta.json()
        self.assertTrue(datos["ok"])
        self.assertTrue(datos["analisisRiesgo"]["esOptimo"])

    def test_cuota_riesgosa(self):
        #prueba 2 HU1: cuota > 25% del sueldo debe retornar esOptimo false con alerta
        respuesta = requests.post(self.base_url, json={
            "amount": 5000000,
            "months": 6,
            "income": 500000
        })
        self.assertEqual(respuesta.status_code, 200)
        datos = respuesta.json()
        self.assertTrue(datos["ok"])
        self.assertFalse(datos["analisisRiesgo"]["esOptimo"])
        self.assertIn("riesgo", datos["analisisRiesgo"]["mensaje"].lower())
