const { DataTypes, } = require("sequelize");

const UserModel = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // createdAt: {
    //     type: DataTypes.DATE,
    //     allowNull: false,
    //     defaultValue: DataTypes.NOW,
    // },
    // updatedAt: {
    //     type: DataTypes.DATE,
    //     allowNull: false,
    //     defaultValue: DataTypes.NOW,
    // }
}

module.exports = {
    initialise: (sequelize) => {
        this.model = sequelize.define("user", UserModel, {timestamps: false});
      },
    
      createUser: async (user) => {
        return this.model.create(user);
      },
    
      findUser: (query) => {
        return this.model.findOne({
          where: query,
        });
      },
    
      updateUser: (query, updatedValue) => {
        return this.model.update(updatedValue, {
          where: query,
        });
      },
    
      findAllUsers: async () => {
        const allUsers = await this.model.findAll();
        const data = JSON.stringify(allUsers, null, 2);
        return data;
      },
    
      deleteUser: async (query) => {
        return this.model.destroy({
          where: query
        });
      }
}