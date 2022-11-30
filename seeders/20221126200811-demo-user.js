"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        role: "Admin",
        userName: "John",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        firstName: "Ali",
        lastName: "Kar",
        role: "Admin",
        userName: "Ali",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        firstName: "Veli",
        lastName: "Koyun",
        role: "Admin",
        userName: "Veli",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        firstName: "Tekin",
        lastName: "Metin",
        role: "Admin",
        userName: "Tekin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        firstName: "Sali",
        lastName: "Yar",
        role: "User",
        userName: "Sali",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        firstName: "Angelina",
        lastName: "Drunt",
        role: "User",
        userName: "Angelina",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
