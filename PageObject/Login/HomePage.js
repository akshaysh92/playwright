const HomePage = {
    name: `//input[contains(@id,"txtFname")]`,
    createOnlineTests: (name) => `//h2[contains(text(),'${name}')]`,
    processPageHeading: (process) => `//div[@class='wrapper']/h1[contains(text(),'${process}')]`
 
  };
  
  module.exports = HomePage;