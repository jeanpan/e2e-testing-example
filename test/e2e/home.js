module.exports = {
  beforeEach: function(browser) {
    browser
      .url('https://e2e-testing-example.herokuapp.com/')
      .waitForElementVisible('body')
      .waitForElementVisible('#app > div');
  },

  'Home test': function(browser) {
    browser
      .assert.visible('#app > div', 'Check if app has been rendered with React')
      .assert.containsText('h3', 'Heading')  // assert contains
      .end();
  },

  'Navigation test': function(browser) {
    browser
      .assert.visible('.list-inline', 'Check if navigation has been rendered')
      .assert.containsText('.list-inline', 'Home')
      .assert.containsText('.list-inline', 'Contact')
      .click('a[href="/contact"]').pause(500)
      .assert.containsText('h3', 'Contact Form')
      .end();
  },

  afterEach: function(client, done) {
    client.customSauceEnd();
    setTimeout(function() {
      done();
    }, 1000);
  }
};
