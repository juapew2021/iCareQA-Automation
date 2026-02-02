@profesional
Feature: Successful profesional account registration

  Background:
    Given The application is opened profesional account
    When The user passes the 3 onboarding screens profesional account
    When The user views the home screen profesional account
    When The user navigates to the login screen profesional account
    When The user creates a new account profesional account

  @basic
  Scenario: Successful profesional account registration BASIC
    Given The user chooses profesional account type
    When The user confirm that wants to create a new profesional account, then tap continue
    When The user scrolls and selects the "BASIC" they want
    When The user completes the first form
    When The user completes the second form
    When The user selects how many working days they want
    When The user must upload a profile photo
    When The user must upload a video

  @standard
  Scenario: Successful profesional account registration STANDARD
    Given The user chooses profesional account type
    When The user confirm that wants to create a new profesional account, then tap continue
    When The user scrolls and selects the "STANDARD" they want
    When The user completes the first form
    When The user completes the second form
    When The user selects how many working days they want
    When The user must upload a profile photo
    When The user must upload a video

  @premium
  Scenario: Successful profesional account registration PREMIUM
    Given The user chooses profesional account type
    When The user confirm that wants to create a new profesional account, then tap continue
    When The user scrolls and selects the "PREMIUM" they want
    When The user completes the first form
    When The user completes the second form
    When The premium user selects the age and writes a brief description
    When The user selects how many working days they want
    When The user must upload a profile photo
    When The user must upload a video
