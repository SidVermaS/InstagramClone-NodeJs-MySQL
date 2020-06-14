import Sequelize from 'sequelize'
import database from '../config/database'

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
        model: 'posts',
        key: 'post_id'
    },
    user_id:    {
        type: Sequelize.INTEGER,
        model: 'users',
        key: 'user_id'
    }
})

export default Comment