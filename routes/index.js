const express = require('express');

const router = express.Router();

const customersController = require('../controllers/customersController');
const productsController = require('../controllers/productsController');
const ordersController = require('../controllers/ordersController');

module.exports = function() {
    // post: /customers
    router.post('/customers', customersController.add);
    // get: /customers
    router.get('/customers', customersController.list);
    // leer cliente
    // get: /customers/:id
    router.get('/customers/:id', customersController.show);
    // put: /customers/:id
    router.put('/customers/:id', customersController.update);
    // delete: /customers/:id
    router.delete('/customers/:id', customersController.delete);

    // productos
    router.post('/products',
        productsController.fileUpload,
        productsController.add);
    router.get('/products', productsController.list);
    router.get('/products/:id', productsController.show);
    router.put('/products/:id',
        productsController.fileUpload,
        productsController.update);
    router.delete('/products/:id', productsController.delete);
    // Buscar productos
    router.get('/products/search/:query', productsController.search);

    // órdenes
    router.post('/orders', ordersController.add);
    router.get('/orders', ordersController.list);
    // Obtener órdenes por cliente
    router.get('/orders/customer/:id', ordersController.byCustomer);
    router.get('/orders/:id', ordersController.show);
    router.put('/orders/:id', ordersController.update);
    router.delete('/orders/:id', ordersController.delete);

    return router;
};
