'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable('comments', {
      comment_id: {
        type: Sequelize.INTEGER,
        autoNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      comment_text: {
        type: Sequelize.STRING,
      },
      post_id: {
        type: Sequelize.INTEGER,
        references: {
        model: 'posts',
        key: 'post_id'
        }
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
        model: 'users',
        key: 'user_id'
        }
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable('comments')
  }
};
