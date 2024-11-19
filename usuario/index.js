const express = require('express');
const axios = require('axios');  // Para realizar peticiones HTTP
const client = require('prom-client');  // Para Prometheus

const app = express();
app.use(express.json());

// Recopilar métricas predeterminadas
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

// Crear un contador de solicitudes
const httpRequestCounter = new client.Counter({
    name: 'http_requests_total',
    help: 'Total de solicitudes HTTP',
    labelNames: ['method', 'route', 'status'],
});

// Middleware para capturar métricas de solicitudes
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

// Endpoint para obtener usuarios
app.get('/usuario', (req, res) => {
    res.send([{ id: 1, nombre: 'Angel Said' }]);
});

// Endpoint para obtener productos desde el servicio de producto
app.get('/productos', async (req, res) => {
    try {
        const response = await axios.get('http://servicio-producto:3002/producto');
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al obtener productos: ' + error.message);
    }
});

// Endpoint para obtener pedidos desde el servicio de pedido
app.get('/pedido', async (req, res) => {
    try {
        const response = await axios.get('http://servicio-pedido:80/pedido');
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al obtener pedidos: ' + error.message);
    }
});

// Endpoint de métricas para Prometheus
app.get('/metrics', async (req, res) => {
    res.set('Content-Type', client.register.contentType);
    res.end(await client.register.metrics());
});

// Iniciar el servidorcur
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
    console.log(`Servicio Usuario escuchando en el puerto ${PORT}`);
});
