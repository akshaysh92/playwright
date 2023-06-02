const {
  login,
  navigateTo,
  createAccountButton,
  createMyAccountButton,
  elementIsVisible,
  showAnotherCode,
  loginButton,
  buyNowButton,
  customizeYourPackage,
  contactUsButton,
  createAccount,
} = require('../../stories/stories');
const { Given, When } = require('cucumber');
const { cast } = require('playwright-fluent');
const LoginPage = require('../../PageObject/Login/Login_SignupPage');
const TestSeriesPage = require('../../PageObject/Login/TestSeriesPage');
const PricePage = require('../../PageObject/Login/PricePage');
const CustomizeYourPackageData = require('../../testData/customizeYourPackageData');
const CreateAccountPage = require('../../PageObject/Login/CreateAccountPage');
const CreateAccountData = require('../../testData/createAccountData');

Given('User navigate to site', async function () {
  await cast(this.p).runStory(navigateTo, { url: 'https://www.testyou.in/index.aspx' });
});

Given('User click login button', async function () {
  await cast(this.p).runStory(loginButton, { selector: LoginPage.loginBtn });
});

Given('User click login', async function () {
  await cast(this.p).runStory(loginButton, { selector: LoginPage.login });
});

Given(
  'Login with {string} credentials userName {string} password {string}',
  async function (valid, uName, uPassword) {
    await cast(this.p).runStory(login, {
      userNameSelector: LoginPage.emailaddress,
      username: uName,
      pwdSelector: LoginPage.passwordField,
      password: uPassword,
    });
  },
);

Given('Verify validation messages {string}', async function (validationMsg) {
  await cast(this.p).runStory(elementIsVisible, {
    selector: LoginPage.userIdPasswordNotMatch(validationMsg),
  });
});

Given('User navigate to site {string} url', async function (url) {
  await cast(this.p).runStory(navigateTo, { url: url });
});

Given('Verify test series page opens and the user is able to see the content', async function () {
  await cast(this.p).runStory(elementIsVisible, { selector: TestSeriesPage.testSeriesPage });
});

Given('User click {string} credit buynow button', async function (credit) {
  await cast(this.p).runStory(buyNowButton, { selector: PricePage.buyNowCredits(credit) });
});

Given('User click contact for customization plan contact us button', async function () {
  await cast(this.p).runStory(contactUsButton, { selector: PricePage.contactUsButton });
});

Given('User fill customize your package form required details', async function () {
  await cast(this.p)
    .runStory(customizeYourPackage, {
      userNameSelector: PricePage.userName,
      username: CustomizeYourPackageData.userName,

      mobileNumberSelector: PricePage.mobileNumber,
      mobileNumber: CustomizeYourPackageData.mobileNumber,

      emailIdSelector: PricePage.emailid,
      emailid: CustomizeYourPackageData.emailid,

      noOfTestsSelector: PricePage.noOfTest,
      noOfTest: CustomizeYourPackageData.noOfTest,

      noOfQuestionBankSelector: PricePage.noOfQuestionBank,
      noOfQuestionBank: CustomizeYourPackageData.noOfQuestionBank,

      packageDurationInMonthsSelector: PricePage.packageDurationInMonths,
      packageDurationInMonths: CustomizeYourPackageData.packageDurationInMonths,

      maxNumberOfTestAttemptsSelector: PricePage.maxNumberOfTestAttempts,
      maxNumberOfTestAttempts: CustomizeYourPackageData.maxNumberOfTestAttempts,

      noOfGroupsSelector: PricePage.noOfGroups,
      noOfGroups: CustomizeYourPackageData.noOfGroups,

      // Captcha handle
      // verificationCodeSelector: PricePage.verificationCode,
      // verificationCode: CustomizeYourPackageData.verificationCode,
    })
    .click(PricePage.submitButton);
});

Given('User increase slide bar value by 50', async function () {
  await cast(this.p).click(PricePage.sliderBar).pressKey('ArrowRight');
});

Given('User decrease slide bar value by 50', async function () {
  await cast(this.p).click(PricePage.sliderBar).pressKey('ArrowLeft');
});

Given('Verify slider value {string}', async function (value) {
  await cast(this.p).runStory(elementIsVisible, { selector: PricePage.sliderValue(value) });
});
