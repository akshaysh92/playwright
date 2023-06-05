Feature: Login functionality

    Scenario: Verify user is able to Login with valid credentials
        Given User navigate to site "https://www.testyou.in/index.aspx" url
        And User click login button
        And Login with "valid" credentials userName "" password ""

    Scenario: Verify user is unable to Login with invalid credentials 
        Given User navigate to site "https://www.testyou.in/index.aspx" url
        And User click login button
        And Login with "invalid" credentials userName "invalidUser" password "invalidPassword"
        Then Verify validation messages "Userid or Password Not Match"

    Scenario: Verify user is able to receive validation over blank/mandatory fields
        Given User navigate to site "https://www.testyou.in/index.aspx" url
        And User click login button
        And Login with "invalid" credentials userName "" password ""
        Then Verify validation messages "Userid or Password Not Match"

    Scenario: Verify user is able to visit the "Test series" URL
        Given User navigate to site "http://testseries.testyou.in/" url
        Then Verify test series page opens and the user is able to see the content

    Scenario: Verify user is able to select the number of attempts using "Slider"
        Given User navigate to site "https://www.testyou.in/Pricing.aspx" url
        And Verify slider value "100"
        And User increase slide bar value by 50
        Then Verify slider value "150"
        And User decrease slide bar value by 50
        Then Verify slider value "100"

    Scenario: Verify user is able to buy the credits using the valid credentials
        Given User navigate to site "https://www.testyou.in/Pricing.aspx" url
        And User click "700 Credit" credit buynow button
        And Login with "valid" credentials userName "" password ""

    Scenario: Verify user is able to customize the plan through "Contact Us"
        Given User navigate to site "https://www.testyou.in/Pricing.aspx" url
        And User click contact for customization plan contact us button
        And User fill customize your package form required details

