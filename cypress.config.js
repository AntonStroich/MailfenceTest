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
  defaultCommandTimeout: 10000,
  e2e: {
    specPattern: "cypress/integration/specs/*.js",
    setupNodeEvents,
  },
  retries: {
    runMode: 1,
    openMode: 1,
    },
  env: {
    url: "https://mailfence.com"
  },
});
