const UserService = require('../services/user.service');
const Utils = require('../helpers/utils');
const formatResponse = require('../helpers/formatResponse');


const getUsers = async (req, res) => {
    try {
        const users = await UserService.getUsers();
        return res.status(200).json(
            formatResponse(200, users, 'Users successfully retrieved')
        )
    } catch (error) {
        return res.status(400).json(
            formatResponse(400, {}, error.message)
        )
    }
}

const updateUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const response = await UserService.updateUser(userId);
        return res.status(200).json(
            formatResponse(200, response, 'User successfully updated')
        )
    } catch (error) {
        return res.status(400).json(
            formatResponse(400, {}, error.message)
        )
    }
}

const createUser = async (req, res) => {
    try {
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        await UserService.createUser(firstName, lastName);
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
    getUsers,
    updateUser,
    createUser
}
