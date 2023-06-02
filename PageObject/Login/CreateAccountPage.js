const CreateAccountPage = {
    name: `//input[contains(@id,"txtFname")]`,
    emailaddress: `//input[contains(@id,"txtEmail")]`,
    loginId: `//input[contains(@id,"txtUserLogin1")]`,
    password: `//input[contains(@id,"txtpassword")]`,
    reEnterPassword: `//input[contains(@id,"txtReType")]`,
    wordVerfication: `//input[contains(@id,"txtVarificationCode")]`,
    confirmationMsg: `//span[contains(@id,"lblOutput")]`,

  };
  
  module.exports = CreateAccountPage;