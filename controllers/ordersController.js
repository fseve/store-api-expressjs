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
        })

        res.json(orders);
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la petición'
        });
    }
};
