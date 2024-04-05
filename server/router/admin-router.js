const express = require('express');
const adminController = require('../controller/admin-controller');
const router = express.Router();

const authMiddleware = require("../middleware/auth-middleware");
const adminMiddleware = require('../middleware/admin-middleware');

router.route('/users').get(authMiddleware,adminMiddleware,adminController.getAllUsers);
router.route('/users/:id').get(authMiddleware,adminController.getUserById);
router.route('/users/update/:id').patch(authMiddleware,adminController.updateUserById);
router.route('/users/delete/:id').delete(authMiddleware,adminController.deleteUserid);
router.route('/contacts').get(authMiddleware,adminMiddleware,adminController.getAllContacts);


module.exports = router;