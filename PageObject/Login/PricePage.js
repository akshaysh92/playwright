const PricePage = {
    contactUsButton: `(//a[text()="Contact Us"])[2]`,
    buyNowCredits: (credits) => `//table[@class='w3-table-all']/tbody/tr/td[@class='crediii' and contains(text(),"${credits}")]/../td[@class='forrmmmm']`,
    userName: `//input[contains(@id,"txtName")]`,
    mobileNumber: `//input[contains(@id,"txtMobile")]`,
    emailid: `//input[contains(@id,"txtEmail")]`,
    noOfTest: `//input[contains(@id,"txtNoOfTest")]`,
    noOfQuestionBank: `//input[contains(@id,"txtNoOfQBank")]`,
    packageDurationInMonths: `//input[contains(@id,"txtPackageVailidity")]`,
    maxNumberOfTestAttempts: `//input[contains(@id,"_txtAttempt")]`,
    noOfGroups: `//input[contains(@id,"txtNoOfGroup")]`,
    verificationCode: `//input[contains(@id,"txtVarificationCode")]`,
    submitButton: `//div[text()=" Submit"]`,
    sliderValue: (value) => `//span[contains(@class,"irs-single")and contains(text(),"${value}")]`,
    sliderBar: `//span[@class="irs-slider single"]`,
  
};
  
  module.exports = PricePage;