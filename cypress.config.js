const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/integration/specs/*.js"
  },
  env: {
    url: "https://mailfence.com"
  },
});
