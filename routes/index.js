const express = require('express');

const router = express.Router();

const customersController = require('../controllers/customersController');

module.exports = function() {
    // get: /customers
    router.get('/customers', customersController.list);

    return router;
};
