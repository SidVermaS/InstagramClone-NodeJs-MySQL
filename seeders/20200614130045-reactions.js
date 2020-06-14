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
    return queryInterface.bulkInsert('reactions', [
      {
        reaction_id: 1,
        status: 'like',
        post_id: 1,
        user_id: 1,
      },
      {
        reaction_id: 2,
        status: 'like',
        post_id: 1,
        user_id: 2,
      },
      {
        reaction_id: 3,
        status: 'like',
        post_id: 1,
        user_id: 3,
      },
      {
        reaction_id: 4,
        status: 'like',
        post_id: 2,
        user_id: 1,
      },
      {
        reaction_id: 5,
        status: 'like',
        post_id: 2,
        user_id: 2,
      },
      {
        reaction_id: 6,
        status: 'like',
        post_id: 2,
        user_id: 3,
      },
      {
        reaction_id: 7,
        status: 'like',
        post_id: 3,
        user_id: 1,
      },
      {
        reaction_id: 8,
        status: 'like',
        post_id: 3,
        user_id: 2,
      },
      {
        reaction_id: 9,
        status: 'like',
        post_id: 3,
        user_id: 3,
      },
      {
        reaction_id: 10,
        status: 'like',
        post_id: 4,
        user_id: 1,
      },
      {
        reaction_id: 11,
        status: 'like',
        post_id: 4,
        user_id: 2,
      },

    ], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('reactions')
  }
};
