const { Given, When, Then } = require('@wdio/cucumber-framework');
const assert = require('assert');
const allure = require('@wdio/allure-reporter').default;

const LaunchScreen = require('../pageobjects/screens/LaunchScreen');

const APP_PACKAGE = 'com.company.icarev2';

Given('the application is installed on the device', async () => {
  const installed = await driver.isAppInstalled(APP_PACKAGE);
  assert.ok(installed, `La aplicación NO está instalada: ${APP_PACKAGE}`);
});

When('the user opens the application', async () => {
  await driver.terminateApp(APP_PACKAGE);
  await driver.execute('mobile: activateApp', { appId: APP_PACKAGE });
});

Then('the application should launch successfully', async () => {
  // ✅ Validación real por UI (tu botón Continue)
  await LaunchScreen.assertLaunched();

  // 📸 Screenshot “en el momento de la aserción” + adjunto a Allure
  const screenshot = await browser.takeScreenshot();
  allure.addAttachment(
    'Assertion - App Launched',
    Buffer.from(screenshot, 'base64'),
    'image/png'
  );
});
