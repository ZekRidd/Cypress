const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'st5d27',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://www.amazon.com'
  },
});
