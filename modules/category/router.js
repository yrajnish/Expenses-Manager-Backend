const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('', controller.createCategory);
router.put('/:id', controller.updateCategory);
router.get('/:id', controller.getCategoryById);
router.get('', controller.getAllCategory);
router.delete('/:id', controller.deleteCategory);


module.exports = router;
