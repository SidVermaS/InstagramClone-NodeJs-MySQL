import Sequelize from 'sequelize'
import database from '../config/database.js'

const Comment=database.define('comments',   {
    comment_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    comment_text: Sequelize.STRING,
    post_id:    {
        type: Sequelize.INTEGER,   
        references: {
            model: 'posts',
            key: 'post_id'
        }
    },
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

export default Comment