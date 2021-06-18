const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/task.controller');

router
    .get('/', TaskController.getTasks);

router
    .route('/:taskId',)
    .put( TaskController.updateTask);

router
    .post('/',TaskController.createTask);

module.exports = router;
