const express = require('express');
const router = express.Router();
const menuController = require('../controller/menuController');

router.get('/', menuController.getAllMenus);
router.get('/:id', menuController.getMenuById);
router.post('/', menuController.addMenu);
router.put('/:id', menuController.updateMenu);
router.delete('/:id', menuController.deleteMenu);

module.exports = router;