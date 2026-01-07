const { Given, When, Then } = require('@wdio/cucumber-framework');
const assert = require('assert');
const AppPage = require('../pageobjects/base/AppPage');
const LoginScreen = require('../pageobjects/screens/LoginScreen');

const APP_PACKAGE = 'com.tuempresa.tuapp'; // 🔴 cambia esto

Given('the application is installed on the device', async () => {
  const installed = await AppPage.isAppInstalled(APP_PACKAGE);
  assert.ok(installed, `App ${APP_PACKAGE} is NOT installed`);
});

When('the user opens the application', async () => {
  // Garantiza arranque limpio
  await AppPage.launchApp();
});

Then('the application should launch successfully', async () => {
  await LoginScreen.assertLoaded();
});
