const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    baseUrl: 'http://127.0.0.1:8000/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


