const {Given, When, Then} = require('@wdio/cucumber-framework');
const assert = require('assert');
const LoginOnboardingScreen = require('../pageobjects/screens/LoginOnboardingScreen');
const LoginScreen = require('../pageobjects/screens/LoginScreen');
const NextScreen = require('../pageobjects/screens/NextScreen');
const RegistrationScreen = require('../pageobjects/screens/RegistrationScreen');
const users = require('../testdata/users.json');

// Background steps
Given('The application is opened registration', async () => {
  await LoginOnboardingScreen.assertLoaded();
});

When('The user passes the {int} onboarding screens registration', async (times) => {
  await LoginOnboardingScreen.passScreens(times);
});

When('The user views the home screen registration', async () => {
  await NextScreen.assertViewProfileVisible();
});

When ('The user navigates to the login screen registration', async () => {
  await LoginScreen.goToLogin();
});

// Scenario steps
Given('The user creates a new account', async () => {
    await RegistrationScreen.tapCreateAccount();
  });

  When('The user chooses participant account type', async () => {
    await RegistrationScreen.selectAccountType();
  });

  When('The user complete the first registration form with valid details', async () => {

      const { firstName,lastName, birthDate, emailAddres, confirmEmail, mobileNumber, suburb } = users.registrationUser;

    await RegistrationScreen.enterFirstName(firstName);
    await RegistrationScreen.enterLastName(lastName);
    await RegistrationScreen.enterBirthDate(birthDate);
    await RegistrationScreen.enterEmailadress(emailAddres);
    await RegistrationScreen.enterConfirmEmail(confirmEmail);
    await RegistrationScreen.enterMobileNumber(mobileNumber);
    await RegistrationScreen.swipeByCoordinates();
    await RegistrationScreen.enterSuburb(suburb);
    await driver.pause(3000);
    await RegistrationScreen.selectMiami();
    await driver.pause(3000); 
    await RegistrationScreen.tapContinueButton();
  });

  When('The user complete the second registration form with valid details', async () => {

      const { ndisNumber, password, confirmPassword } = users.registrationUser;

    await RegistrationScreen.enterNdisNumber(ndisNumber);
    await driver.pause(3000);
    await RegistrationScreen.enterTypeDisability();
    await RegistrationScreen.enterTypeDisability2();
    await RegistrationScreen.enterTypeDisability3();
    await RegistrationScreen.enterPassword(password);
    await RegistrationScreen.swipeByCoordinates();
    await RegistrationScreen.enterConfirmPassword(confirmPassword);
    await RegistrationScreen.touchForContinue();
    await RegistrationScreen.tapContinueButton();
  });

  When('The user chooses avatar', async () => {
    await driver.pause(10000);
    await RegistrationScreen.enterSelectAvatar();
    await driver.pause(10000);
    await RegistrationScreen.tapCreateButton();
  });

  Then('The user views the confirmation screen registration', async () => {
    await driver.pause(10000);
    await RegistrationScreen.loadconfirmView();
  });