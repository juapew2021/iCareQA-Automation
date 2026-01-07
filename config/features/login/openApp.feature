@smoke
Feature: Open Application and Login

  Scenario: The application is opened and user attempts to login

    Given the application is installed on the device
    When the user opens the application
    Then the application should launch successfully