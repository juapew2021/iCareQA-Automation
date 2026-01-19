const { Given, When, Then } = require('@wdio/cucumber-framework');
const assert = require('assert');
const allure = require('@wdio/allure-reporter').default;

const OnboardingScreen = require('../pageobjects/screens/OnboardingScreen');
const NextOnboardingScreen = require('../pageobjects/screens/NextOnboardingScreen');

const APP_PACKAGE = 'com.company.icarev2';

Given('the application is launched and onboarding screen is displayed', async () => {
  const installed = await driver.isAppInstalled(APP_PACKAGE);
  assert.ok(installed, `La aplicación NO está instalada: ${APP_PACKAGE}`);
});

When('the application is installed on the device', async () => {
  const installed = await driver.isAppInstalled(APP_PACKAGE);
  assert.ok(installed, `La aplicación NO está instalada: ${APP_PACKAGE}`);
});

When('the user opens the application', async () => {
  await driver.terminateApp(APP_PACKAGE);
  await driver.execute('mobile: activateApp', { appId: APP_PACKAGE });

  // asegura que estás en el onboarding 1
  await OnboardingScreen.assertLoaded();
});

Given('the continue button should be clickable', async () => {
  await OnboardingScreen.assertContinueClickable();

  // evidencia opcional
  const shot = await browser.takeScreenshot();
  allure.addAttachment('Continue is clickable', Buffer.from(shot, 'base64'), 'image/png');
});

When('the user clicks the continue {int} times', async (times) => {
  for (let i = 1; i <= times; i++) {
    await OnboardingScreen.assertContinueClickable();
    await OnboardingScreen.clickContinue();
    await driver.pause(1000); // pequeña pausa para animación/transición
  }
});

Then('the user should proceed to the next onboarding screen', async () => {
  await NextOnboardingScreen.assertLoaded();

  const shot = await browser.takeScreenshot();
  allure.addAttachment('Next onboarding screen', Buffer.from(shot, 'base64'), 'image/png');
});