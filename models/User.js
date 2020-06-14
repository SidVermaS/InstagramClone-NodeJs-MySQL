import Sequelize from 'sequelize'
import database from '../config/database'

const User=database.define('users', {
    user_id:    {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: Sequelize.STRING,
    role: Sequelize.STRING,
    mobile_no:  {
        type: Sequelize.BIGINT,
        unique: true
    },
    password:   {
        type: Sequelize.TEXT,
    },
    device_token:   {
        type: Sequelize.TEXT,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
})

export default User