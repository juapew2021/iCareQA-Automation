@onboarding
Feature: Onboarding Continue Button Functionality


  Scenario: User can click continue button
    Given the application is launched and onboarding screen is displayed
    When the continue button should be clickable
    When the user clicks the continue 3 times
    Then the user should proceed to the next onboarding screen

    