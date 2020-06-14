import Sequelize from 'sequelize'
import database from '../config/database'

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
        model: 'users',
        key: 'user_id'
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
})

export default Post