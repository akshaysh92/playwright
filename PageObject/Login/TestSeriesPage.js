const TestSeriesPage = {
    testSeriesPage: `//div[@class='ty-wrap view-list']`,
    buyNowCredits: (credits) => `//table[@class='w3-table-all']/tbody/tr/td[@class='crediii' and contains(text(),"${credits}")]/../td[@class='forrmmmm']`,
 
};
  
  module.exports = TestSeriesPage;