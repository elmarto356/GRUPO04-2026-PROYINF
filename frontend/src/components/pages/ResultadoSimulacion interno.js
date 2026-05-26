import React, { useEffect, useMemo, useState } from "react";
import { useLocation, Link, Navigate } from "react-router-dom";

const API_BASE = "";
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";
const SAVE_SIMULATION_URL = "/api/historial-simulaciones";

function fmtCLP(n) {
  try {
    return Number(n).toLocaleString("es-CL");
  } catch {
    return n;
  }
}

function fmtPct(n, dec = 2) {
  const num = Number(n);
  if (Number.isNaN(num)) return n;
  return `${num.toFixed(dec)}%`;
}

function daysToMonths(days) {
  const m = Math.round(Number(days) / 30);
  return Math.max(6, Math.min(60, m || 0));
}

export default function ResultadoSimulacionInt() {
  const { state, search } = useLocation();

  const [data, setData] = useState(state || null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const [mostrarModal, setMostrarModal] = useState(false);
  const [enviando, setEnviando] = useState(false);

  const [simulacionGuardada, setSimulacionGuardada] = useState(false);
  const [guardandoSimulacion, setGuardandoSimulacion] = useState(false);
  const [errorGuardar, setErrorGuardar] = useState("");

  const qs = useMemo(() => new URLSearchParams(search), [search]);
  const montoQS = qs.get("monto");
  const tiempoQS = qs.get("cuotas");
  const sueldoQS = qs.get("sueldo");

  useEffect(() => {
    if (!state && montoQS && tiempoQS) {
      const amount = Number(String(montoQS).replace(/\./g, ""));
      const months = daysToMonths(tiempoQS);
      const income = Number(String(sueldoQS || "0").replace(/\./g, ""));

      if (!Number.isFinite(amount) || amount <= 0) {
        setErr("Monto inválido.");
        return;
      }

      setLoading(true);
      setErr("");

      fetch(`${API_BASE}/api/simulations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, months, income }),
      })
        .then((r) => {
          if (!r.ok) throw new Error("No se pudo obtener la simulación.");
          return r.json();
        })
        .then((json) => {
          setData({
            ok: json.ok,
            input: { amount, months, income },
            rate: json.rate,
            result: json.result,
            analisisRiesgo: json.analisisRiesgo,
            notes: json.notes || [],
          });
        })
        .catch((e) => setErr(e.message))
        .finally(() => setLoading(false));
    }
  }, [state, montoQS, tiempoQS, sueldoQS]);

  const guardarSimulacion = async () => {
    if (!data?.ok || simulacionGuardada || guardandoSimulacion) return;

    setGuardandoSimulacion(true);
    setErrorGuardar("");

    const datosGuardar = {
      amount: data.input.amount,
      months: data.input.months,
      income: data.input.income,

      annual_rate: Number(data.rate.annualRatePct) / 100,
      monthly_payment: data.result.monthlyInstallment,
      total_interest: data.result.totalInterest,
      total_to_pay: data.result.totalPaid,
    };

    try {
      const response = await fetch(SAVE_SIMULATION_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datosGuardar),
      });

      const raw = await response.text();

      let respuestaData = null;
      try {
        respuestaData = raw ? JSON.parse(raw) : null;
      } catch {
        respuestaData = null;
      }

      if (!response.ok) {
        throw new Error(
          respuestaData?.message ||
            respuestaData?.error ||
            "No se pudo guardar la simulación."
        );
      }

      setSimulacionGuardada(true);
    } catch (error) {
      console.error("Error al guardar simulación:", error);
      setErrorGuardar(error.message || "Error al guardar la simulación.");
    } finally {
      setGuardandoSimulacion(false);
    }
  };

  const enviarSolicitud = async () => {
    setEnviando(true);

    const datosEnvio = {
      userId: 1,
      amount: data.input.amount,
      months: data.input.months,
      income: data.input.income,
    };

    try {
      const response = await fetch(`${API_URL}/api/credit-requests`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datosEnvio),
      });

      const respuestaData = await response.json();

      if (response.ok) {
        alert(
          "✅ Solicitud creada con éxito. ID: " +
            (respuestaData.data?.id || "Nuevo")
        );
        setMostrarModal(false);
      } else {
        alert("❌ Error: " + (respuestaData.error || "Algo salió mal"));
      }
    } catch (error) {
      console.error(error);
      alert("❌ Error de conexión con el servidor");
    } finally {
      setEnviando(false);
    }
  };

  if (!data && !montoQS && !tiempoQS) {
    return <Navigate to="/simulador-interno" replace />;
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bs-body-bg">
      <div className="card p-4 shadow" style={{ width: "520px" }}>
        <h3 className="text-center mb-4">Resultado de la simulación</h3>

        {loading && <div className="text-center">Calculando...</div>}

        {err && <div className="alert alert-danger text-center">{err}</div>}

        {data?.ok && (
          <>
            {data.analisisRiesgo && (
              <div
                className={`alert ${
                  data.analisisRiesgo.esOptimo
                    ? "alert-success"
                    : "alert-danger"
                } text-center fw-bold shadow-sm`}
              >
                {data.analisisRiesgo.esOptimo ? "✅ " : "⚠️ "}
                {data.analisisRiesgo.mensaje}
              </div>
            )}

            <div className="mb-3">
              <strong>Sueldo Reportado:</strong> $
              {fmtCLP(data.input.income || 0)} <br />
              <strong>Monto:</strong> ${fmtCLP(data.input.amount)}
              <br />
              <strong>Cuotas:</strong> {data.input.months}
            </div>

            <div className="mb-3">
              <strong>Tasa anual:</strong>{" "}
              {fmtPct(data.rate.annualRatePct, 2)}
              <br />
              <strong>Tasa mensual:</strong>{" "}
              {fmtPct(data.rate.monthlyRatePct, 3)}
            </div>

            <div className="mb-3">
              <strong>Cuota mensual aproximada:</strong> $
              {fmtCLP(data.result.monthlyInstallment)}
              <br />
              <strong>Total a pagar:</strong> $
              {fmtCLP(data.result.totalPaid)}
              <br />
              <strong>Intereses totales:</strong> $
              {fmtCLP(data.result.totalInterest)}
            </div>

            {Array.isArray(data.notes) && data.notes.length > 0 && (
              <ul className="small">
                {data.notes.map((n, i) => (
                  <li key={i}>{n}</li>
                ))}
              </ul>
            )}

            <div
              className={`d-flex align-items-center justify-content-between border rounded-3 px-3 py-2 mt-3 ${
                simulacionGuardada
                  ? "bg-success bg-opacity-10 border-success"
                  : "bg-light"
              }`}
              role="button"
              tabIndex={0}
              onClick={guardarSimulacion}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  guardarSimulacion();
                }
              }}
              style={{
                cursor:
                  simulacionGuardada || guardandoSimulacion
                    ? "default"
                    : "pointer",
              }}
            >
              <div className="d-flex align-items-center gap-2">
                <input
                  className="form-check-input m-0"
                  type="checkbox"
                  checked={simulacionGuardada}
                  readOnly
                />

                <div>
                  <div className="fw-bold">
                    {guardandoSimulacion
                      ? "Guardando simulación..."
                      : simulacionGuardada
                      ? "Simulación guardada"
                      : "Guardar simulación"}
                  </div>

                  <div className="small text-muted">
                    {simulacionGuardada
                      ? "La simulación fue agregada al historial"
                      : "Agregar esta simulación al historial"}
                  </div>
                </div>
              </div>

              <span
                className={`badge ${
                  simulacionGuardada ? "bg-success" : "bg-secondary"
                }`}
              >
                {simulacionGuardada
                  ? "Guardada"
                  : guardandoSimulacion
                  ? "Guardando"
                  : "Pendiente"}
              </span>
            </div>

            {errorGuardar && (
              <div className="alert alert-danger mt-2 py-2 small mb-0">
                {errorGuardar}
              </div>
            )}
          </>
        )}

        <div className="d-flex gap-2 mt-3">
          <Link className="btn btn-secondary flex-fill" to="/simulador-interno">
            Nueva simulación
          </Link>

          <Link className="btn btn-primary flex-fill" to="/pagina-menu">
            Inicio
          </Link>

          <button
            className="btn btn-success flex-fill"
            onClick={() => setMostrarModal(true)}
          >
            Solicitar Crédito
          </button>
        </div>
      </div>

      {mostrarModal && (
        <div style={estilosModal.overlay}>
          <div style={estilosModal.contenido}>
            <h4 className="mb-3">Confirmar Solicitud</h4>

            <div
              className="alert alert-info text-start"
              style={{ fontSize: "0.9rem" }}
            >
              <strong>Resumen:</strong>
              <br />
              Monto: ${fmtCLP(data.input.amount)}
              <br />
              Cuotas: {data.input.months}
            </div>

            <p className="text-muted small text-start">
              Al hacer clic en "Aceptar", declaras que has leído los términos y
              condiciones y aceptas el procesamiento de tu solicitud de crédito.
            </p>

            <div className="d-flex gap-2 justify-content-end mt-4">
              <button
                className="btn btn-secondary"
                onClick={() => setMostrarModal(false)}
                disabled={enviando}
              >
                Cancelar
              </button>

              <button
                className="btn btn-primary"
                onClick={enviarSolicitud}
                disabled={enviando}
              >
                {enviando ? "Enviando..." : "Aceptar y Enviar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const estilosModal = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  contenido: {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "10px",
    maxWidth: "450px",
    width: "90%",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
    animation: "fadeIn 0.3s",
  },
};