const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Eventos Cypress (se necessário)
    },
    baseUrl: 'https://ecommerce-playground.lambdatest.io/',
    video: true,
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
  },
});

