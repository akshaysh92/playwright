const LoginPage = {
  createAnAccountBtn: '//*[text()="Create an Account "]',
  createMyAccountBtn: `//div[contains(@class,"adm_control_box")]/input`,
  commonValidationSummary: `//div[contains(@class,"common_validation_summary")]/ul`,
  showAnotherCodeBtn: `//a[contains(@class,"RefreshButton")]`,

  loginBtn: `//a[contains(@id,"Signindiv")]`,
  emailaddress: `//input[contains(@name,"txtUserLogin")]`,
  passwordField: `//input[contains(@id,"txtPassword")]`,
  login: `//input[@value='Login']`,

  createAccountName: `//input[contains(@id,"txtFname")]`,
  createAccountEmail: `//input[contains(@id,"txtEmail")]`,
  createAccountLoginId: `//input[contains(@id,"txtUserLogin1")]`,
  createAccountPassword: `//input[contains(@id,"txtpassword")]`,
  createAccountReEnterPassword: `//input[contains(@id,"txtVarificationCode")]`,
  userIdPasswordNotMatch: (validationMsg) => `//span[contains(text(),'${validationMsg}')]`,
};

module.exports = LoginPage;