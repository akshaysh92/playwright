Feature: HomePage functionality

    Scenario: Verify that the user is able to view the process to create online tests
        Given User navigate to site "https://www.testyou.in/index.aspx" url
        And User click "Create Online Tests"
        Then Verify "Process" page header