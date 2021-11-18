const Products = require('../models/Products');

// agregar producto
exports.add = async(req, res) => {
    const product = new Products(req.body);

    try {
        await product.save();
        res.json({ message: 'Nuevo producto agregado' });
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({
                message: `Ya existe el producto con el sku ${req.body.sku}`
            });
        } else {
            res.status(400).json({
                message: 'Error al procesar la petición'
            });
        }
    }
};

// listar productos
exports.list = async(req, res) => {
    try {
        const products = await Products.find({});
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la petición'
        });
        next();
    }
};

exports.show = async(req, res, next) => {
    try {
        const product = await Products.findById(req.params.id);
        if (!product) {
            res.status(404).json({
                message: 'El producto no existe'
            });
        } else { // Se agregó el ELSE al momento de realizar las pruebas
            res.json(product);
        }
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la petición'
        });
    }
};

// Actualizar producto
exports.update = async(req, res, next) => {
    try {
        const product = await Products.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );
        res.json({
            message: 'Producto actualizado correctamente'
        });
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({
                message: `Ya existe el producto con el sku ${req.body.sku}`
            });
        } else {
            res.status(400).json({
                message: 'Error al procesar la petición'
            });
        }
    }
};

// Eliminar producto
exports.delete = async(req, res, next) => {
    try {
        await Products.findOneAndDelete({ _id: req.params.id });
        res.json({
            message: 'Producto eliminado correctamente'
        });
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la petición'
        });
    }
};
