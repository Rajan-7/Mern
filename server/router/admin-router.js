const express = require('express');
const adminController = require('../controller/admin-controller');
const router = express.Router();

const authMiddleware = require("../middleware/auth-middleware");

router.route('/users').get(authMiddleware,adminController.getAllUsers);
router.route('/users/:id').get(authMiddleware,adminController.getUserById);
router.route('/users/delete/:id').delete(authMiddleware,adminController.deleteUserid);
router.route('/contacts').get(authMiddleware,adminController.getAllContacts);


module.exports = router;