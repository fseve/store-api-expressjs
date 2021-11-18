const express = require('express');

const router = express.Router();

const customersController = require('../controllers/customersController');

module.exports = function() {
    // post: /customers
    router.post('/customers', customersController.add);
    // get: /customers
    router.get('/customers', customersController.list);
    // leer cliente
    // get: /customers/:id
    router.get('/customers/:id', customersController.show);

    return router;
};
