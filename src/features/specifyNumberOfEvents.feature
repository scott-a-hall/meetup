Feature: Specify number of events

    Scenario: By default, when the user opens the app, the number of events is set to 32
        Given the user hasnt specified the number of events per page
        When the user opens the app
        Then the default output is 32

    Scenario: The user is able to specify the number of events displayed per page
        Given the app is open
        When the user inputs the number of events to view per page
        Then the output renders the specified number of events