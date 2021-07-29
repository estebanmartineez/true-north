const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');

router
    .get('/', UserController.getUsers);

router
    .route('/:userId',)
    .put( UserController.updateUser);

router
    .post('/',UserController.createUser);

module.exports = router;
