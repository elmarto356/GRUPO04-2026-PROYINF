const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });
const Tesseract = require('tesseract.js');

const formatos_permitidos = ['image/jpeg', 'image/png', 'application/pdf'];

function SacarRut(texto) {
    const patron = /\b(\d{1,2}\.?\d{3}\.?\d{3}-[\dkK])\b/;
    const resultado = texto.match(patron);

    if (resultado) {
        return resultado[1];
    }

    return null;
}

function SacarMontoLiquido(texto) {
    const lineas = texto.split('\n');

    for (let i = 0; i < lineas.length; i++) {
        const linea = lineas[i].toLowerCase();

        const LineaDelLiquido = linea.includes('líquido') || linea.includes('liquido');

        if (LineaDelLiquido) {
            const patronMonto = /\$?\s*(\d{1,3}(?:[.,]\d{3})*)/;
            const resultado = linea.match(patronMonto);

            if (resultado) {
                const montoLimpio = resultado[1].replace(/[.,]/g, '');
                return parseInt(montoLimpio, 10);
            }
        }
    }

    return null;
}

router.post('/ocr', upload.single('documento'), async (req, res) => {
    try {
        const archivo = req.file;

        if (!archivo) {
            return res.status(400).json({
                ok: false,
                error: 'No se recibió ningún archivo.'
            });
        }

        const formatoEsValido = formatos_permitidos.includes(archivo.mimetype);

        if (!formatoEsValido) {
            return res.status(400).json({
                ok: false,
                error: 'Formato de archivo no permitido. Use .pdf, .jpg o .png.'
            });
        }

        if (archivo.mimetype === 'application/pdf') {
            return res.status(422).json({
                ok: false,
                error: 'Los archivos PDF aún no son procesados por OCR. Suba una imagen (.jpg o .png).'
            });
        }

        const worker = await Tesseract.createWorker('spa');
        const resultado = await worker.recognize(archivo.buffer);
        await worker.terminate();

        const textoExtraido = resultado.data.text;
        const rut = SacarRut(textoExtraido);
        const montoLiquido = SacarMontoLiquido(textoExtraido);

        res.json({
            ok: true,
            texto: textoExtraido,
            confianza: resultado.data.confidence,
            datosExtraidos: {
                rut: rut,
                montoLiquido: montoLiquido
            },
            archivo: {
                nombre: archivo.originalname,
                tamaño: archivo.size,
                tipo: archivo.mimetype
            }
        });

    } catch (error) {
        res.status(500).json({ ok: false, error: error.message });
    }
});

module.exports = router;
