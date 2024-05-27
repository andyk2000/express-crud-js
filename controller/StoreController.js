const Stores = require("../models/Stores")

const getAllStores = async (request, response) => {
    try {
        const allStores = await Stores.findAllStores();
        console.log(allStores);
        return response.status(200).json(allStores);
    }catch(err){
        console.log(err);
    }
}

const getByID = async (request, response) => {
    try {
        const id = parseInt(request.params.id);
        const getByID = await Stores.findStore({id: id});
        return response.status(200).json(getByID);
    } catch (error) {
        
    }
}

const updateStore = async (request, response) => {
    try {
        const id = parseInt(request.params.id);
        const {name, description, owner_id} = request.body;
        const data = {name, description, owner_id};
        console.log("data: ----------"+data.name);
        const updatedStore = await Stores.updateStore({id: id}, data);
        return response.status(200).json(updatedStore);
    } catch (error) {
        
    }
}

const deleteStore = async (request, response) => {
    try {
        const id = parseInt(request.params.id);
        const deleteStore = await Stores.deleteStore({id: id});
        return response.status(200).json(deleteStore);
    } catch (error) {
        console.log(error)
    }
}

const createStore = async (request, response) => {
    const { name, description, owner_id } = request.body;
    const body = { name, description, owner_id };
    const newStore = Stores.createStore(body)
    return response.status(200).json(newStore);
}

module.exports = {
    getAllStores,
    getByID,
    updateStore,
    deleteStore,
    createStore
}