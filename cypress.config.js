const { defineConfig } = require("cypress");
const fs = require("fs");

async function setupNodeEvents(on, config){
  
  on('task', {
      deleteFile(path){
        try {
          fs.unlinkSync(path);
        } catch(error) {
          if (!error.message.includes("no such file or directory")){
            throw error;
          } 
        } 
        return null;
    }
  });

  return config;
}

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/integration/specs/*.js",
    setupNodeEvents,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 100000,
    taskTimeout: 100000,
    requestTimeout: 10000,
    responseTimeout: 50000,
    testIsolation: true,
  },
  env: {
    url: "https://mailfence.com"
  },
});
