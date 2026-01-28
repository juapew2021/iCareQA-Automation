const {Given, When, Then} = require('@wdio/cucumber-framework');
const assert = require('assert');
const LoginOnboardingScreen = require('../pageobjects/screens/LoginOnboardingScreen');
const LoginScreen = require('../pageobjects/screens/LoginScreen');
const NextScreen = require('../pageobjects/screens/NextScreen');
const ProfesionalAccountScreen = require('../pageobjects/screens/ProfesionalAccountScreen');
const RegistrationScreen = require('../pageobjects/screens/RegistrationScreen');
const users = require('../testdata/users.json');

// Background steps
Given('The application is opened profesional account', async () => {
  await LoginOnboardingScreen.assertLoaded();
});

When('The user passes the {int} onboarding screens profesional account', async (times) => {
  await LoginOnboardingScreen.passScreens(times);
}); 

When('The user views the home screen profesional account', async () => {
  await NextScreen.assertViewProfileVisible();
});

When ('The user navigates to the login screen profesional account', async () => {
  await LoginScreen.goToLogin();
});

When ('The user creates a new account profesional account', async () => {
  await RegistrationScreen.tapCreateAccount();
}); 

// Scenario steps
Given('The user chooses profesional account type', async () => {
    await ProfesionalAccountScreen.tapProfesionalAccount();
  });

  When('The user confirm that wants to create a new profesional account, then tap continue', async () => {
    await RegistrationScreen.tapContinueButton();
  });