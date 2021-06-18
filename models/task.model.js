const mongoose = require('mongoose');

const taskFields = {
    uuid: mongoose.Types.ObjectId,
    title: String,
    status: String
};

const TaskSchema = new mongoose.Schema(taskFields, {
    timestamps: true
});
const Task = mongoose.model('Task', TaskSchema,'Task');
if(!Task.collection.collection) {
    Task.createCollection();
}

module.exports = {
    Task: Task,
    taskFields: taskFields,
}
