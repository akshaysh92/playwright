Feature: SignUp functionality

    Scenario: Verify user is able to Sign Up for Test You
        Given User navigate to site "https://www.testyou.in/index.aspx" url
        And User click create account button
        And User enter create account required fields
        And User click create my account button
        Then Verify confirmation message is displayed on top of the sign up form

    Scenario: Verify user is able to receive validation over blank/mandatory fields
        Given User navigate to site "https://www.testyou.in/index.aspx" url
        And User click create account button
        And User click create my account button
        Then Verify validation messages regarding the empty fields are displayed on top of the signup form