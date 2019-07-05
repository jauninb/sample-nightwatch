//var conf = require('../../nightwatch.conf.js');
const chromedriver = require("chromedriver");

module.exports = {

    'Demo test Google': function (browser) {
      browser
        .url('http://google.com')   // visit the url
        .waitForElementVisible('body') // wait for the body to be rendered
        .assert.containsText('body', 'Google') // assert body contains text
        //.waitForElementPresent('non-existing-one', 2000) // produces an assertion failure 
        //.waitForElementNotPresent('body', 2000) // produces an assertion failure 
        .waitForElementVisible('non-existing-one', 2000) // produces an error in nightwatch 1.1.13
        //.waitForElementNotVisible('body-non-existing', 2000) // produces an error in nightwatch 1.1.13
        .end();
      },
  
    before : function(browser, done) {
      chromedriver.start();
  
      done();
    },
  
    after : function(browser, done) {
      chromedriver.stop();
  
      done();
    },
      
    afterEach: (browser, done) => {
      const test = browser.currentTest;

      const testName = test.name;
      const { module } = test;
      const { results } = test;

//      console.log(testName);
//      console.log("test=" + test);
  
      done();
    }

  };
