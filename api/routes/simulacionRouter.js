const express = require('express');
const router = express.Router();
const { simulateStandard } = require('../controladores/simulationController');

function parseBody(body) {
  const amount = Number(body.amount);
  const months = Number(body.months);
  const income = Number(body.income); // 1. Capturamos el sueldo del frontend

  // Validaciones
  if (!Number.isFinite(amount) || !Number.isInteger(months)) {
    return { ok: false, error: "Debe enviar 'amount' (número) y 'months' (entero)." };
  }
  if (amount < 100000 || amount > 50000000) {
    return { ok: false, error: "El monto debe estar entre $100.000 y $50.000.000." };
  }
  if (months < 6 || months > 60) {
    return { ok: false, error: "Las cuotas deben ser entre 6 y 60 meses." };
  }
  if (!Number.isFinite(income) || income <= 0) {
    return { ok: false, error: "Debe enviar 'income' (sueldo líquido) mayor a 0." };
  }
  
  return { ok: true, amount, months, income }; 
}

router.post('/simulations', (req, res) => {
  const parsed = parseBody(req.body);
  if (!parsed.ok) return res.status(400).json({ ok: false, error: parsed.error });

  const { amount, months, income } = parsed; 

  const sim = simulateStandard({ amount, months, income });

  res.json({
    ok: true,
    input: { amount, months, income },
    ...sim, // Esto ya trae rate, result y analisisRiesgo desde el controlador
    notes: [
      'Simulación con tasa estándar fija 16.5% anual.',
      'Sueldo registrado para análisis de riesgo.'
    ]
  });
});

module.exports = router;