import { sequelize } from "../database/database";
import { DataTypes } from "sequelize";


const User = sequelize.define('Users', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},{ timestamps: false });



export default User;