const seleniumServer = require("selenium-server");
const chromedriver = require("chromedriver");

//console.log(chromedriver.path);

// we use a nightwatch.conf.js file so we can include comments and helper functions
module.exports = {
  "src_folders": [
    "test/e2e"// Where you are storing your Nightwatch e2e tests
  ],
  "webdriver" : {
    "start_process": true,
    "server_path": chromedriver.path,
    "cli_args": [
      "--verbose"
    ],
    "port": 9515
  },

  "test_settings": {
    "default": {
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    }
  }
}
