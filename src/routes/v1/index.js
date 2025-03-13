const express = require('express');
const router = express.Router();

const UserController = require('../../controllers/user-controller');
const {authRequestValidators} = require('../../middlewares/index');

router.post(
    '/signUp', 
    authRequestValidators.validateUserAuth,
    UserController.create
);
router.delete('/delete/:id', UserController.destroy);
router.post(
    '/signIn',
    authRequestValidators.validateUserAuth,
    UserController.signIn
);
router.get(
    '/isAuthenticated',
    UserController.isAuthenticated
);
router.get(
    '/isAdmin',
    authRequestValidators.validateIsAdminRequest,
    UserController.isAdmin
);

module.exports = router;