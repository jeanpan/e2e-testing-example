module.exports = {
  beforeEach: function(browser) {
    browser
      .url('http://127.0.0.1:3000/')
      .waitForElementVisible('body')
      .waitForElementVisible('#app > div');
  },

  'Navigation test': function(browser) {
    browser
      .assert.visible('.list-inline', 'Check if navigation has been rendered')
      .assert.containsText('.list-inline', 'Home')
      .assert.containsText('.list-inline', 'Contact')
      .click('a[href="/contact"]').pause(500)
      .assert.containsText('h3', 'Contact Form')
      .click('a[href="/"]').pause(500)
      .assert.containsText('h3', 'Heading')
      .end();
  },

  afterEach: function(client, done) {
    client.customSauceEnd();
    setTimeout(function() {
      done();
    }, 1000);
  }
};
