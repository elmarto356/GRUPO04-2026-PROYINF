
function simulateStandard({ amount, months, income }) {
  const annualRatePct = 16.5;
  const i = (annualRatePct / 100) / 12;
  const pow = Math.pow(1 + i, months);
  const monthlyInstallment = amount * (i * pow) / (pow - 1);
  const totalPaid = monthlyInstallment * months;
  const totalInterest = totalPaid - amount;
  const installmentRound = Math.round(monthlyInstallment)

  let analisisRiesgo = null;
  if (income){
    const esOptimo = installmentRound <= (income * 0.25)
    analisisRiesgo = {
      esOptimo,
      mensaje: esOptimo
        ? "Prestamo optimo segun capacidad de pago"
        : "Alerta: carga financiera riesgosa"
    }
  }
  return {
    ok: true,
    rate: {
      annualRatePct,
      monthlyRatePct: Number((annualRatePct / 12).toFixed(4))
    },
    result: {
      monthlyInstallment: Math.round(monthlyInstallment),
      totalPaid: Math.round(totalPaid),
      totalInterest: Math.round(totalInterest)
    },
    analisisRiesgo
  };
}

module.exports = { simulateStandard };