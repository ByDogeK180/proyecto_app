const express = require('express');
const client = require('prom-client'); // Importa la librería de Prometheus
const app = express();

app.use(express.json());

// Recopila métricas predeterminadas (como el uso de memoria, CPU, etc.)
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

// Crea un contador para las solicitudes HTTP
const httpRequestCounter = new client.Counter({
    name: 'http_requests_total',
    help: 'Total de solicitudes HTTP',
    labelNames: ['method', 'route', 'status'],
});

// Middleware para contar las solicitudes HTTP
app.use((req, res, next) => {
    res.on('finish', () => {
        httpRequestCounter.inc({
            method: req.method,
            route: req.path,
            status: res.statusCode,
        });
    });
    next();
});

// Endpoint para obtener pedidos
app.get('/pedido', (req, res) => {
    res.send([{ id: 1, producto: 'Laptop', cantidad: 2 }]);
});

// Endpoint para exponer las métricas de Prometheus
app.get('/metrics', async (req, res) => {
    res.set('Content-Type', client.register.contentType);
    res.end(await client.register.metrics());
});

// Puerto del servicio
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servicio Pedido escuchando en el puerto ${PORT}`);
});
