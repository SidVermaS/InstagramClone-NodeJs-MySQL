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
    return queryInterface.bulkInsert('posts', [
      {
        post_id: 1,
        caption: '1st caption',
        photo_url: 'default.jpg',
        user_id: 1,
        updatedAt: "2020-05-29T02:48:51.030Z",
        createdAt: "2020-05-29T02:48:51.030Z"  
      },
      {
        post_id: 2,
        caption: '1st caption',
        photo_url: 'default.jpg',
        user_id: 1,
        updatedAt: "2020-05-29T02:48:51.030Z",
        createdAt: "2020-05-29T02:48:51.030Z"  
      },
      {
        post_id: 3,
        caption: '1st caption',
        photo_url: 'default.jpg',
        user_id: 1,
        updatedAt: "2020-05-29T02:48:51.030Z",
        createdAt: "2020-05-29T02:48:51.030Z"  
      },
      {
        post_id: 4,
        caption: '1st caption',
        photo_url: 'default.jpg',
        user_id: 2,
        updatedAt: "2020-05-29T02:48:51.030Z",
        createdAt: "2020-05-29T02:48:51.030Z"  
      },
      {
        post_id: 5,
        caption: '1st caption',
        photo_url: 'default.jpg',
        user_id: 2,
        updatedAt: "2020-05-29T02:48:51.030Z",
        createdAt: "2020-05-29T02:48:51.030Z"  
      },
      {
        post_id: 6,
        caption: '1st caption',
        photo_url: 'default.jpg',
        user_id: 3,
        updatedAt: "2020-05-29T02:48:51.030Z",
        createdAt: "2020-05-29T02:48:51.030Z"  
      },
      {
        post_id: 7,
        caption: '1st caption',
        photo_url: 'default.jpg',
        user_id: 3,
        updatedAt: "2020-05-29T02:48:51.030Z",
        createdAt: "2020-05-29T02:48:51.030Z"  
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
    return queryInterface.bulkDelete('posts', null, {})
  }
};
