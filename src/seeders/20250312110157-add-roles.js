'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Roles', [
      {
        name: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Customer',
        createdAt: new Date(),
        updatedAt : new Date()
      },
      {
        name: 'Airline-Business',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],{});
  }
  ,

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Roles', {
      name: ['Admin', 'Customer', 'Airline-Business']
    }, {});
  }
};
