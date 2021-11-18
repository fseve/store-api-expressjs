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

// leer cliente por id
exports.show = async(req, res, next) => {
    try {
        const customer = await Customers.findById(req.params.id);
        if (!customer) {
            res.status(404).json({
                message: 'El cliente no existe'
            });
        } else { // Se agregó el ELSE al momento de realizar las pruebas
            res.json(customer);
        }
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la petición'
        });
    }
};
