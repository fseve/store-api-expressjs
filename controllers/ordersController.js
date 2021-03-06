const Orders = require('../models/Orders');

exports.add = async(req, res, next) => {
    try {
        const order = new Orders(req.body);
        await order.save();

        res.json(order);
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la petición'
        });
    }
};

exports.list = async(req, res, next) => {
    try {
        const orders = await Orders.find({})
        .populate('customer')
        .populate({
            path: 'products.product',
            model: 'Products'
        });

        res.json(orders);
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la petición'
        });
    }
};

exports.show = async(req, res, next) => {
    try {
        const order = await Orders.findById(req.params.id)
        .populate('customer')
        .populate({
            path: 'products.product',
            model: 'Products'
        });
        if (!order) {
            res.status(404).json({
                message: 'La orden no existe'
            });
            next();
        } else { // Se agregó el ELSE al momento de realizar las pruebas
            res.json(order);
        }
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la petición'
        });
    }
};

exports.update = async(req, res, next) => {
    try {
        const order = await Orders.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        )
        .populate('customer')
        .populate({
            path: 'products.product',
            model: 'Products'
        });
        res.json(order);
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la petición'
        });
    }
};

exports.delete = async(req, res, next) => {
    try {
        await Orders.findOneAndDelete({ _id: req.params.id });
        res.json({ message: 'Orden eliminada correctamente' });
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la petición'
        });
    }
};

// Buscar ordenes por cliente
exports.byCustomer = async(req, res, next) => {
    try {
        const orders = await Orders.find({ customer: req.params.id })
        .populate('customer')
        .populate({
            path: 'products.product',
            model: 'Products'
        });

        res.json(orders);
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la petición'
        });
    }
};
