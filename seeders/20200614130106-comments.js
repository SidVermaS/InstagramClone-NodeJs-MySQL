'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('comments',  [
      {
        comment_id: 1,
        comment_text: 'comment 1',
        post_id: 1,
        user_id: 1,
      },
      {
        comment_id: 2,
        comment_text: 'comment 1',
        post_id: 1,
        user_id: 2,
      },
      {
        comment_id: 3,
        comment_text: 'comment 1',
        post_id: 1,
        user_id: 3,
      },
      {
        comment_id: 4,
        comment_text: 'comment 1',
        post_id: 2,
        user_id: 1,
      },
      {
        comment_id: 5,
        comment_text: 'comment 1',
        post_id: 2,
        user_id: 2,
      },
      {
        comment_id: 6,
        comment_text: 'comment 1',
        post_id: 2,
        user_id: 3,
      },
      {
        comment_id: 7,
        comment_text: 'comment 1',
        post_id: 3,
        user_id: 1,
      },
      {
        comment_id: 8,
        comment_text: 'comment 1',
        post_id: 3,
        user_id: 2,
      },
      {
        comment_id: 9,
        comment_text: 'comment 1',
        post_id: 3,
        user_id: 3,
      },
      {
        comment_id: 10,
        comment_text: 'comment 1',
        post_id: 4,
        user_id: 1,
      },
      {
        comment_id: 11,
        comment_text: 'comment 1',
        post_id: 4,
        user_id: 2,
      },

    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
