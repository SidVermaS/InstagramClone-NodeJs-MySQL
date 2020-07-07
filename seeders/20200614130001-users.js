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
        photo_url: 'img1.jpg',
        mobile_no: 9123456781,
        password: 'e10adc3949ba59abbe56e057f20f883e',   
        updatedAt: "2020-05-29T02:48:51.030Z",
        createdAt: "2020-05-29T02:48:51.030Z"    
      },
      {
        user_id: 2,
        name: 'Kartik Dake',
        role: 'Member',
        photo_url: 'img2.jpg',
        mobile_no: 9123456782,
        password: 'e10adc3949ba59abbe56e057f20f883e',   
        updatedAt: "2020-05-29T02:48:51.030Z",
        createdAt: "2020-05-29T02:48:51.030Z"    
      },
      {
        user_id: 3,
        name: 'Ketaki Joshi',
        role: 'Member',
        photo_url: 'img3.jpg',
        mobile_no: 9123456783,
        password: 'e10adc3949ba59abbe56e057f20f883e',   
        updatedAt: "2020-05-29T02:48:51.030Z",
        createdAt: "2020-05-29T02:48:51.030Z"    
      },
      {
        user_id: 4,
        name: 'Omkar Kale',
        role: 'Member',
        photo_url: 'img4.jpg',
        mobile_no: 9123456784,
        password: 'e10adc3949ba59abbe56e057f20f883e',   
        updatedAt: "2020-05-29T02:48:51.030Z",
        createdAt: "2020-05-29T02:48:51.030Z"    
      },
      {
        user_id: 5,
        name: 'Lokesh Patel',
        role: 'Member',
        photo_url: 'img5.jpg',
        mobile_no: 9123456785,
        password: 'e10adc3949ba59abbe56e057f20f883e',   
        updatedAt: "2020-05-29T02:48:51.030Z",
        createdAt: "2020-05-29T02:48:51.030Z"    
      },
      {
        user_id: 6,
        name: 'Daisy Mane',
        role: 'Member',
        photo_url: 'img6.jpg',
        mobile_no: 9123456786,
        password: 'e10adc3949ba59abbe56e057f20f883e',   
        updatedAt: "2020-05-29T02:48:51.030Z",
        createdAt: "2020-05-29T02:48:51.030Z"    
      },
      {
        user_id: 7,
        name: 'Vijay Shah',
        role: 'Member',
        photo_url: 'img7.jpg',
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
