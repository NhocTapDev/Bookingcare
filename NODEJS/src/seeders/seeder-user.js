'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert("Users", [
      
      {
        email: "admin@gmail.com",
        password: "123456",
        firstName: "Dat",
        lastName: "Nguyen Trong",
        address: "Thanh Hoa",
        phoneNumber: "0123456789",
        gender: 1,
        image: "",
        roleId: "",
        positionId: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
