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
        caption: 'This is the caption of the first post',
        photo_url: 'img1.jpg',
        user_id: 1,
        updatedAt: "2020-05-29T02:48:51.030Z",
        createdAt: "2020-05-29T02:48:51.030Z"  
      },
      {
        post_id: 2,
        caption: 'This is the caption of the second post',
        photo_url: 'img2.jpg',
        user_id: 1,
        updatedAt: "2020-05-29T02:48:51.030Z",
        createdAt: "2020-05-29T02:48:51.030Z"  
      },
      {
        post_id: 3,
        caption: 'This is the caption of the third post',
        photo_url: 'img3.jpg',
        user_id: 1,
        updatedAt: "2020-05-29T02:48:51.030Z",
        createdAt: "2020-05-29T02:48:51.030Z"  
      },
      {
        post_id: 4,
        caption: 'This is the caption of the fourth post',
        photo_url: 'img4.jpg',
        user_id: 2,
        updatedAt: "2020-05-29T02:48:51.030Z",
        createdAt: "2020-05-29T02:48:51.030Z"  
      },
      {
        post_id: 5,
        caption: 'This is the caption of the fifth post',
        photo_url: 'img5.jpg',
        user_id: 2,
        updatedAt: "2020-05-29T02:48:51.030Z",
        createdAt: "2020-05-29T02:48:51.030Z"  
      },
      {
        post_id: 6,
        caption: 'This is the caption of the sixth post',
        photo_url: 'img6.jpg',
        user_id: 3,
        updatedAt: "2020-05-29T02:48:51.030Z",
        createdAt: "2020-05-29T02:48:51.030Z"  
      },
      {
        post_id: 7,
        caption: 'This is the caption of the seventh post',
        photo_url: 'img7.jpg',
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
