const { faker } = require("@faker-js/faker");

const firstName = faker.name.firstName()
const CreateAccountData = {
    userName: firstName,
    emailid: `${firstName}${faker.name.lastName()}@mailinator.com`,
    loginId: faker.phone.number('#####'),
    password: `test${faker.phone.number('###')}`,
    wordVerfication: `testcaptcha`,

  
  };
  
  module.exports = CreateAccountData;