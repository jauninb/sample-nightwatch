//var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Demo test GitHub': function (browser) {
    browser
      .url('http://www.github.com/jauninb')   // visit the url
      .waitForElementVisible('body', 'mon message0') // wait for the body to be rendered
      .verify.containsText('body', 'jaunin') // assert body contains text
      .waitForElementVisible('body', 'mon message2') // wait for the body to be rendered
      .waitForElementPresent('css selector', 'non-existing-one', 2000, 100, false, function() {}, 'mon message3')
      .waitForElementVisible('non-existing-one', 2000, 'mon message4')
      .end();
    },

    'Demo test Google': function (browser) {
      browser
        .url('http://google.com')   // visit the url
        .waitForElementVisible('body') // wait for the body to be rendered
        .assert.containsText('body', 'google') // assert body contains text
//        .waitForElementVisible('non-existing-one', 2000)
        .end();
      },
  
    after: (browser, done) => {
      console.log("github.js#after");
      done();
    },
  
    afterEach: (browser, done) => {
      console.log("github.js#afterEach");
      const test = browser.currentTest;

      const testName = test.name;
      const { module } = test;
      const { results } = test;

      console.log(testName);
      console.log("JSON.stringify(test):" + JSON.stringify(test));
  
      done();
    }

  };
