const Customers = require('../models/Customers');

// agregar cliente
exports.add = async(req, res) => {
    const customer = new Customers(req.body);

    try {
        await customer.save();
        res.json({ message: 'Nuevo cliente agregado' });
    } catch (error) {
        console.log(error);
        res.send(error);
        next();
    }
};

// Primera acción: list
exports.list = async(req, res) => {
    try {
        const customers = await Customers.find({});
        res.json(customers);
    } catch (error) {
        console.log(error);
        res.send(error);
        next();
    }
};
