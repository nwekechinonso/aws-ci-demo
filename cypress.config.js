const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", // or whatever your app uses
    supportFile: false,
    specPattern: "cypress/e2e/**/*.cy.js"
  }
});
