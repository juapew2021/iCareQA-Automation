@login

Feature: Login Feature

  Scenario: User attempts to login with valid credentials
    Given The application is opened
    When The user passes the 3 onboarding screens
    When The user views the home screen
    When The user navigates to the login screen
    When The user views the login screen
    When The user enters valid username and password
    Then The user should be logged in successfully