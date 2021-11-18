const Customers = require('../models/Customers');

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
