const User = require('../models/user.model');

const getUsers  = async () => {
    try {
        return await User.findAll();
    } catch (error) {
        throw Error(`Could not get tasks, error detail ${error}`);
    }
};

const updateUser  = async (userId) => {
    try {
        // Update user
    } catch (error) {
        throw Error(`Could not update task, error detail ${error}`);
    }
};


const createUser = async (firstName, lastName) => {
    try {
        return User.create({
            firstName: firstName,
            lastName: lastName
        });
    } catch (error) {
        throw Error(`Can not create a task, error detail ${error}`);
    }
};

module.exports = {
    getUsers,
    updateUser,
    createUser
}
