const { defineConfig } = require("cypress");
const fs = require("fs");

async function setupNodeEvents(on, config){
  
  on('task', {
      deleteFile(path){
        try {
          fs.unlinkSync(path);
        } catch(error) {
          if (error.message.includes("no such file or directory")){
            console.log(`${error.name}`);
          } else {
            throw error;
          }  
        } finally {
          console.log(`Function to remove the file has been completed`);
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
  },
  env: {
    url: "https://mailfence.com"
  },
});
