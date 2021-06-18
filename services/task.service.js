const {Task} = require('../models/task.model');

const getTasks  = async () => {
    try {
        return await Task.find();
    } catch (error) {
        throw Error(`Could not get tasks, error detail ${error}`);
    }
};

const updateTask  = async (taskId) => {
    try {
        return await Task.findOneAndUpdate(
            { _id : taskId },
            { status : 'DONE' },
            { new: true }
        );
    } catch (error) {
        throw Error(`Could not update task, error detail ${error}`);
    }
};


const createTask = async (titles) => {
    try {
        for (const title of titles) {
            const task = new Task();
            task.title = title;
            task.status = 'PENDING';
            await task.save();
        }
    } catch (error) {
        throw Error(`Can not create a task, error detail ${error}`);
    }
};

module.exports = {
    getTasks,
    updateTask,
    createTask
}
