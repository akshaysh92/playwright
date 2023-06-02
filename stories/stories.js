const LoginPage  = require('../PageObject/Login/Login_SignupPage');
const { cast, Story, StoryWithProps } = require('playwright-fluent');
const PricePage = require('../PageObject/Login/PricePage');

const navigateTo = async (p, props) => {
  await p.navigateTo(props.url, { timeout: 120000 });
  const page = cast(p).currentPage();
};

const createAccountButton = async (p, props) => {
  await p.click(props.selector);
};

const loginButton = async (p, props) => {
  await p.click(props.selector);
};

const createMyAccountButton = async (p, props) => {
  await p.click(props.selector);
};

const showAnotherCode = async (p, props) => {
  await p.click(props.selector);
};

const buyNowButton = async (p, props) => {
  await p.click(props.selector);
};


const contactUsButton = async (p, props) => {
  await p.click(props.selector);
};

 const waitForSelectorToBeVisible = async (p, props) => {
    const page = p.currentPage();
    await page.waitForSelector(props.selector, { timeout: 120000, });
}

const elementIsVisible = async (p, props) => {
  await p.expectThatSelector(props.selector).isVisible();
};

const elementIsChecked = async (p, props) => {
  await p.expectThatSelector(props.selector).isChecked();
};

const login = async (p, props) => {
  console.log(`UserName: ${props.username}`);
  console.log(`Password: ${props.password}`);
  await cast(p).wait(2000)

  const userNameLoc = await cast(p).currentPage().$$(props.userNameSelector);
  for(let i = 0; i < userNameLoc.length; i++){
    if(await userNameLoc[i].isVisible()){
      await userNameLoc[i].click();
      await userNameLoc[i].fill(props.username)
    }
  }
  const pwdLoc = await cast(p).currentPage().$$(props.pwdSelector);
  for(let i = 0; i < pwdLoc.length; i++){
    if(await pwdLoc[i].isVisible()){
      await pwdLoc[i].click();
      await pwdLoc[i].fill(props.password)
    }
  }

  const loginLoc = await cast(p).currentPage().$$(LoginPage.login);
  for(let i = 0; i < loginLoc.length; i++){
    if(await loginLoc[i].isVisible()){
      await loginLoc[i].click();
    }
  }
};

const customizeYourPackage = async (p, props) => {
  await p
    .click(props.userNameSelector)
    .typeText(props.username)
   
    .click(props.mobileNumberSelector)
    .typeText(props.mobileNumber)

    .click(props.emailIdSelector)
    .typeText(props.emailid)
   
    .click(props.noOfTestsSelector)
    .typeText(props.noOfTest)

    .click(props.noOfQuestionBankSelector)
    .typeText(props.noOfQuestionBank)
   
    .click(props.packageDurationInMonthsSelector)
    .typeText(props.packageDurationInMonths)

    .click(props.maxNumberOfTestAttemptsSelector)
    .typeText(props.maxNumberOfTestAttempts)

    .click(props.noOfGroupsSelector)
    .typeText(props.noOfGroups)
};

const createAccount = async (p, props) => {
  await p
    .click(props.userNameSelector)
    .typeText(props.username)
  
    .click(props.emailIdSelector)
    .typeText(props.emailid)

    .click(props.loginIdSelector)
    .typeText(props.loginId)
   
    .click(props.passwordSelector)
    .typeText(props.password)

    .click(props.ReEnterPasswordSelector)
    .typeText(props.password)

    .click(props.wordVerficationSelector)
    .typeText(props.wordVerfication)
};

const getSliderValue = async (p, props) => {
  const actualSelectorText = await cast(p).selector(props.selector).innerText();
  console.log(actualSelectorText);
};

module.exports = {
  navigateTo,
  elementIsChecked,
  elementIsVisible,
  login,
  createAccountButton,
  createMyAccountButton,
  showAnotherCode,
  loginButton,
  waitForSelectorToBeVisible,
  buyNowButton,
  customizeYourPackage,
  contactUsButton,
  getSliderValue,
  createAccount,
};

