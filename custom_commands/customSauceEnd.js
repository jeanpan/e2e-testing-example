exports.command = function(result) {
  const SauceLabs = require("saucelabs");

  const saucelabs = new SauceLabs({
    username: process.env.SAUCE_USERNAME,
    password: process.env.SAUCE_ACCESS_KEY
  });

  const sessionid = this.capabilities['webdriver.remote.sessionid'];
  const jobName = this.currentTest.name;

  saucelabs.updateJob(sessionid, {
    passed: this.currentTest.results.failed === 0,
    name: jobName
  }, function() {});

  console.log("SauceOnDemandSessionID=" + sessionid + " job-name=" + jobName);
  this.end();
};
