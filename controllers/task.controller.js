const TitleService = require('../services/title.service');
const TaskService = require('../services/task.service');
const Utils = require('../helpers/utils');
const formatResponse = require('../helpers/formatResponse');


const getTasks = async (req, res) => {
    try {
        const tasks = await TaskService.getTasks();
        return res.status(200).json(
            formatResponse(200, tasks, 'Tasks successfully retrieved')
        )
    } catch (error) {
        return res.status(400).json(
            formatResponse(400, {}, error.message)
        )
    }
}

const updateTask  = async (req, res) => {
    try {
        const taskId = req.params.taskId;
        const response = await TaskService.updateTask(taskId);
        return res.status(200).json(
            formatResponse(200, response, 'Task successfully updated')
        )
    } catch (error) {
        return res.status(400).json(
            formatResponse(400, {}, error.message)
        )
    }
}

const createTask = async (req, res) => {
    try {
        const amountSentences = Utils.generateRandomInteger(3) || 3;
        const titles = TitleService.getTitles(amountSentences);
        //const titles = ["test1.test2.test3"];
        console.log(titles);
        await TaskService.createTask(titles[0].split('.'));
        return res.status(200).json(
            formatResponse(200, {}, 'Task successfully created')
        )
    } catch (error) {
        return res.status(400).json(
            formatResponse(400, {}, error.message)
        )
    }
}


module.exports = {
    getTasks,
    updateTask,
    createTask
}
