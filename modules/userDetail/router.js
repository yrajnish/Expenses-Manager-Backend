const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('', controller.createUser);
router.put('/:id', controller.updateUser);
router.get('/:id', controller.getUserById);
router.get('', controller.getAllUser);
router.delete('/:id', controller.deleteUser);


module.exports = router;
