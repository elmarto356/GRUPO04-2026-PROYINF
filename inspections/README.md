

## issues seleccionados para corrección
- Nuestra motivacion para llevar a cabo estas 2 correcciones es el principio de seguridad del cliente y la capacidad de que nuestro servicio este siempre operativo

### issue 1 — dato no sanitizado escrito en browser storage
- **Archivo**: `frontend/src/components/pages/Login.js`
- **Severidad**: Security · High · Vulnerability · Minor
- **Regla**: `jssecurity:S8475` — "Ensure that tainted data is sanitized before being written to browser storage"
- **Descripcion**: La respuesta del servidor (`data.data.id`) se almacena directamente en `localStorage` sin validacion, por lo cual si el servidor es comprometido, datos maliciosos pueden ser escritos en el storage del navegador pudiendo ser perjudicial para el cliente
- **Correccion aplicada**: parsear el valor como entero antes de almacenarlo, asegurando que sea un valor numerico

### issue 2 — limite de tamaño de contenido HTTP no configurado
- **Archivo**: `api/routes/OCR.js`
- **Severidad**: Security · Medium · Vulnerability · Major
- **Regla**: `javascript:S5693` — "Make sure the content length limit is safe here"
- **Descripcion**: `multer` se configura sin limite de tamaño de archivo (`limits`), un atacante podria enviar archivos extremadamente grandes, agotando la memoria del servidor, pudiendo afectar gravemente al servicio si el servidor deja de responder por sobrecarga de memoria
- **Correccion aplicada**: se añade `limits: { fileSize: 10 * 1024 * 1024 }` (límite de 10 MB para que no se suba un archivo muy pesado).




