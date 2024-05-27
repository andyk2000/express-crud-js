const { DataTypes} = require("sequelize");

const Store = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    owner_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}

module.exports = {
    initialise: (sequelize) => {
        this.model = sequelize.define("store", Store, {timestamps: false});
      },
    
      createStore: async (store) => {
        return this.model.create(store);
      },
    
      findStore: (query) => {
        return this.model.findOne({
          where: query,
        });
      },
    
      updateStore: (query, updatedValue) => {
        return this.model.update(updatedValue, {
          where: query,
        });
      },
    
      findAllStores: async () => {
        const allStores = await this.model.findAll();
        const data = JSON.stringify(allStores, null, 2);
        return data;
      },
    
      deleteStore: async (query) => {
        return this.model.destroy({
          where: query
        });
      }
}