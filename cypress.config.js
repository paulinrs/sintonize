const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  e2e: {
    baseUrl: 'http://127.0.0.1:8000/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


