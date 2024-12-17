const express = require('express');
const router = express.Router();
const suppliersController = require('../controller/suppliersController');

router.get('/', suppliersController.getAllSuppliers);
router.get('/:id', suppliersController.getSupplierById);
router.post('/', suppliersController.addSupplier);
router.put('/:id', suppliersController.updateSupplier);
router.delete('/:id', suppliersController.deleteSupplier);

module.exports = router;
