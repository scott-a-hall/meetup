Feature: Show/hide an events details

    Scenario: By default, when user opens the app, only the event name is displayed
        Given the event element is collapsed by default
        When the user opens the app
        Then only the event names are on display

    Scenario: User should be able to expand the details of their event
        Given the event app is open
        When the user selects their event
        Then the event details list is expanded

    Scenario: Once details are expanded, user should be able to hide the details
        Given the event app is open
        And the event details are expanded
        When the user clicks on the details
        Then the details are collapsed