import Sequelize from 'sequelize'
import database from '../config/database.js'

const Post=database.define('posts', {
    post_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    caption:    {
        type: Sequelize.STRING,
    },
    photo_url: Sequelize.STRING,
    user_id:    {  
        type: Sequelize.INTEGER, 
        references: { 
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

export default Post