const Users = require("../models/Users");


const createUser = async (request, response) => {
    const { userName, email, password } = request.body;
    const body = {userName, email, password};
    console.log(body);
    const newUser = Users.createUser(body)
    return response.status(200).json(newUser);
}

const getAllUsers = async (request, response) => {
    try {
        const allUsers = await Users.findAllUsers();
        console.log(allUsers);
        return response.status(200).json(allUsers);
    }catch(err){
        console.log(err);
    }
}

const deleteUser = async (request, response) => {
    try {
        const id = parseInt(request.params.id);
        const deleteUser = await Users.deleteUser({id: id});
        return response.status(200).json(deleteUser);
    } catch (error) {
        console.log(error)
    }
}

const getByID = async (request, response) => {
    try {
        const id = parseInt(request.params.id);
        const getByID = await Users.findUser({id: id});
        return response.status(200).json(getByID);
    } catch (error) {
        
    }
}

const updateUser = async (request, response) => {
    try {
        const id = parseInt(request.params.id);
        const {userName, email, password} = request.body;
        const updatedUSer = await Users.updateUser({id: id}, {userName: userName, email: email, password: password});
        return response.status(200).json(updatedUSer);
    } catch (error) {
        
    }
}


module.exports = {
    createUser,
    getAllUsers,
    deleteUser,
    getByID,
    updateUser
}