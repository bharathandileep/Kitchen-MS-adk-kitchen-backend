const express = require('express');
const router = express.Router();
const inventoryOrderItemsController = require('../controller/inventoryOrderItemsController');

router.get('/', inventoryOrderItemsController.getAllInventoryOrderItems);
router.get('/:id', inventoryOrderItemsController.getInventoryOrderItemById);
router.post('/', inventoryOrderItemsController.addInventoryOrderItem);
router.put('/:id', inventoryOrderItemsController.updateInventoryOrderItem);
router.delete('/:id', inventoryOrderItemsController.deleteInventoryOrderItem);

module.exports = router;
