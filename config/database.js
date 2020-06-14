import Sequelize from 'sequelize'

const sequelize=new Sequelize('event_db', 'root', '',   {
    host: '127.0.0.1',
    dialect: 'mysql',
    pool:   {
        max: 5,
        min: 0,
        idle: 10000
    }
})
export default sequelize