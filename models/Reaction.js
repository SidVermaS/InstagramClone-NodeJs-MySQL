import Sequelize from 'sequelize'
import database from '../config/database'

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
        model: 'posts',
        key: 'post_id'
    },
    user_id:    {
        type: Sequelize.INTEGER,
        model: 'users',
        key: 'user_id'
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
})  

export default Reaction