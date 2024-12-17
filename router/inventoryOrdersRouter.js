const express = require('express');
const router = express.Router();
const inventoryOrdersController = require('../controller/inventoryOrdersController');

router.get('/', inventoryOrdersController.getAllInventoryOrders);
router.get('/:id', inventoryOrdersController.getInventoryOrderById);
router.post('/', inventoryOrdersController.addInventoryOrder);
router.put('/:id', inventoryOrdersController.updateInventoryOrder);
router.delete('/:id', inventoryOrdersController.deleteInventoryOrder);

module.exports = router;
