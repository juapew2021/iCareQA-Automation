@registration

Feature: User resgistration

Background:
        Given The application is opened registration
        When The user passes the 3 onboarding screens registration
        When The user views the home screen registration
        When The user navigates to the login screen registration

Scenario: Successful registration with valid details
        Given The user creates a new account
        When The user chooses participant account type
        When The user complete the first registration form with valid details
        When The user complete the second registration form with valid details
        When The user chooses avatar
        Then The user views the confirmation screen registration
        
    
    

  