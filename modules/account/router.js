const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('', controller.createAccount);
router.put('/:id', controller.updateAccount);
router.get('/:id', controller.getAccountById);
router.get('/', controller.getAllAccount);
router.delete('/:id', controller.deleteAccount);


module.exports = router;
