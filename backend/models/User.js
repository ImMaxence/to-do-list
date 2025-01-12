import { DataTypes } from 'sequelize';
import sequelize from '../configurations/dbConfig.js';

const User = sequelize.define('User', {
    googleId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    displayName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    photo: {
        type: DataTypes.STRING,
    },
}, {
    timestamps: true,
});

export default User;