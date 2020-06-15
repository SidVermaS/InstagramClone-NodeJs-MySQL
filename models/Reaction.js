import Sequelize from 'sequelize'
import database from '../config/database.js'

const Reaction=database.define('reactions', {
    reaction_id:    {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    status: {
        type: Sequelize.STRING
    },
    post_id:    {
        type: Sequelize.INTEGER,
        reference:  {
            model: 'posts',
            key: 'post_id'
        }
    },
    user_id:    {
        type: Sequelize.INTEGER,
        reference:  {
            model: 'users',
            key: 'user_id'
        }
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },   
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    }
})  

export default Reaction