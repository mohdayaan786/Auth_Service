const express = require('express');
const router = express.Router();

const UserController = require('../../controllers/user-controller');


router.post('/signUp', UserController.create);
router.delete('/delete/:id', UserController.destroy);


module.exports = router;