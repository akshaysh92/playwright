const CreateAccountPage = require("../../PageObject/Login/CreateAccountPage");
const LoginPage = require("../../PageObject/Login/Login_SignupPage");
const { createAccountButton, createAccount, createMyAccountButton, elementIsVisible, showAnotherCode } = require("../../stories/stories");
const CreateAccountData = require("../../testData/createAccountData");
const { Given, When, Then } = require('cucumber');
const { cast } = require('playwright-fluent');

Given('User click create account button', async function () {
    await cast(this.p).runStory(createAccountButton, { selector: LoginPage.createAnAccountBtn });
});


Given('User enter create account required fields', async function () {
    await cast(this.p).runStory(createAccount, {
        userNameSelector: CreateAccountPage.name,
        username: CreateAccountData.userName,

        emailIdSelector: CreateAccountPage.emailaddress,
        emailid: CreateAccountData.emailid,

        loginIdSelector: CreateAccountPage.loginId,
        loginId: CreateAccountData.loginId,

        passwordSelector: CreateAccountPage.password,
        password: CreateAccountData.password,

        ReEnterPasswordSelector: CreateAccountPage.reEnterPassword,
        password: CreateAccountData.password,

        wordVerficationSelector: CreateAccountPage.wordVerfication,
        wordVerfication: CreateAccountData.wordVerfication,
    });
});

Given('User click create my account button', async function () {
    await cast(this.p).runStory(createMyAccountButton, { selector: LoginPage.createMyAccountBtn });
});

Then('Verify confirmation message is displayed on top of the sign up form', async function () {
    await cast(this.p).runStory(elementIsVisible, { selector: CreateAccountPage.confirmationMsg });
});

Then('Verify validation messages regarding the empty fields are displayed on top of the signup form',
    async function () {
        await cast(this.p).runStory(elementIsVisible, { selector: LoginPage.commonValidationSummary });
    },
);

Given('User click show another code', async function () {
    await cast(this.p).runStory(showAnotherCode, { selector: LoginPage.showAnotherCodeBtn });
});
