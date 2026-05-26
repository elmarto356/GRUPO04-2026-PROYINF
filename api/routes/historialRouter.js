// routes/historialRouter.js
const express = require("express");
const router = express.Router();
const { pool } = require("../db");

function obtenerUserId(req) {
  const userId =
    req.user?.id ||
    req.session?.user?.id ||
    req.body?.userId ||
    req.query?.userId ||
    req.headers["x-user-id"];

  const userIdNum = Number(userId);

  if (!Number.isInteger(userIdNum) || userIdNum <= 0) {
    return null;
  }

  return userIdNum;
}

router.get("/historial-simulaciones", async (req, res) => {
  try {
    const userId = obtenerUserId(req);

    if (!userId) {
      return res.status(401).json({
        message: "No se pudo identificar al usuario.",
        ayuda: "Envía userId por query, sesión, token o header x-user-id.",
      });
    }

    const { rows } = await pool.query(
      `SELECT id,
              created_at,
              amount,
              months,
              annual_rate,
              monthly_payment,
              total_interest,
              total_to_pay
       FROM simulations
       WHERE user_id = $1
       ORDER BY created_at DESC`,
      [userId]
    );

    res.json({ simulations: rows });
  } catch (err) {
    console.error("Error al obtener historial:", err);

    res.status(500).json({
      message: "Error al obtener el historial de simulaciones",
      error: err.message,
      detail: err.detail,
      code: err.code,
    });
  }
});

router.post("/historial-simulaciones", async (req, res) => {
  try {
    const userId = obtenerUserId(req);

    if (!userId) {
      return res.status(401).json({
        message: "No se pudo identificar al usuario.",
        ayuda: "Envía userId en el body, sesión, token o header x-user-id.",
      });
    }

    const {
      amount,
      months,
      annual_rate,
      monthly_payment,
      total_interest,
      total_to_pay,
    } = req.body;

    const amountNum = Number(amount);
    const monthsNum = Number(months);
    const annualRateNum = Number(annual_rate);
    const monthlyPaymentNum = Number(monthly_payment);
    const totalInterestNum = Number(total_interest);
    const totalToPayNum = Number(total_to_pay);

    if (
      !Number.isFinite(amountNum) ||
      !Number.isInteger(monthsNum) ||
      !Number.isFinite(annualRateNum) ||
      !Number.isFinite(monthlyPaymentNum) ||
      !Number.isFinite(totalInterestNum) ||
      !Number.isFinite(totalToPayNum)
    ) {
      return res.status(400).json({
        message: "Datos inválidos para guardar la simulación.",
        received: req.body,
      });
    }

    const { rows } = await pool.query(
      `INSERT INTO simulations (
          user_id,
          amount,
          months,
          annual_rate,
          monthly_payment,
          total_interest,
          total_to_pay
       )
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING id,
                 created_at,
                 amount,
                 months,
                 annual_rate,
                 monthly_payment,
                 total_interest,
                 total_to_pay`,
      [
        userId,
        amountNum,
        monthsNum,
        annualRateNum,
        monthlyPaymentNum,
        totalInterestNum,
        totalToPayNum,
      ]
    );

    res.status(201).json({
      message: "Simulación guardada correctamente.",
      simulation: rows[0],
    });
  } catch (err) {
    console.error("Error al guardar simulación:", err);

    res.status(500).json({
      message: "Error al guardar la simulación",
      error: err.message,
      detail: err.detail,
      code: err.code,
    });
  }
});

module.exports = router;