const { defineConfig } = require("cypress");


const WEBPAGE_URL = 'https://domus.am/';

module.exports = defineConfig({
    e2e: {
        baseUrl: WEBPAGE_URL
    },
    env: {
        baseUrl: WEBPAGE_URL
    }
});

