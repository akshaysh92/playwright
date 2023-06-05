const { cast } = require('playwright-fluent');
const { name } = require('../../PageObject/Login/CreateAccountPage');
const HomePage = require('../../PageObject/Login/HomePage');
const {
    elementIsVisible,
    keyIcon,
  } = require('../../stories/stories');
  const { Given, When, Then } = require('cucumber');

  Given('User click {string}', async function (name) {
    await cast(this.p).runStory(keyIcon, { selector: HomePage.createOnlineTests(name) });

});

Given('Verify {string} page header', async function (process) {
  await cast(this.p).runStory(elementIsVisible, { selector: HomePage.processPageHeading(process) });

});