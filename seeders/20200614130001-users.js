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
    return queryInterface.bulkInsert('users', [
      {
        user_id: 1,
        name: 'Akash Oke',
        role: 'Member',
        photo_url: 'default.jpg',
        mobile_no: 9123456789,
        password: 'e10adc3949ba59abbe56e057f20f883e',   
        updatedAt: "2020-05-29T02:48:51.030Z",
        createdAt: "2020-05-29T02:48:51.030Z"    
      },
      {
        user_id: 2,
        name: 'Kartik Dake',
        role: 'Member',
        photo_url: 'default.jpg',
        mobile_no: 9123456788,
        password: 'e10adc3949ba59abbe56e057f20f883e',   
        updatedAt: "2020-05-29T02:48:51.030Z",
        createdAt: "2020-05-29T02:48:51.030Z"    
      },
      {
        user_id: 3,
        name: 'Omkar Kale',
        role: 'Member',
        photo_url: 'default.jpg',
        mobile_no: 9123456787,
        password: 'e10adc3949ba59abbe56e057f20f883e',   
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
    return queryInterface.bulkDelete('users', null, {})
  }
};
