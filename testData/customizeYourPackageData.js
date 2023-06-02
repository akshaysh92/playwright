const { faker } = require("@faker-js/faker");

const firstName = faker.name.firstName()
const CustomizeYourPackageData = {
    userName: firstName,
    mobileNumber: faker.random.numeric(10),
    emailid: `${firstName}${faker.name.lastName()}@mailinator.com`,
    
    noOfTest: faker.phone.number('##'),
    noOfQuestionBank: faker.phone.number('##'),
    packageDurationInMonths: `1${faker.phone.number('#')}`,
   
    maxNumberOfTestAttempts: faker.phone.number('##'),
    noOfGroups: faker.phone.number('##'),
  
  };
  
  module.exports = CustomizeYourPackageData;