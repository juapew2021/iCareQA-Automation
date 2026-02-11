
// features/step-definitions/login.steps.js
const { Given, When, Then } = require('@wdio/cucumber-framework');
const assert = require('assert');
const LoginOnboardingScreen = require('../pageobjects/screens/LoginOnboardingScreen');
const LoginScreen = require('../pageobjects/screens/LoginScreen');
const NextScreen = require('../pageobjects/screens/NextScreen');
const users = require('../testdata/users.json');


// OJO: Debe coincidir exactamente con el texto del feature
Given('The application is opened', async () => {
  // Si tu BasePage tiene un método de 'launchApp', úsalo aquí.
  // Con Appium, normalmente la app ya está abierta al iniciar la sesión.
  await LoginOnboardingScreen.assertLoaded();
});

When('The user passes the {int} onboarding screens', async (times) => {
  await LoginOnboardingScreen.passScreens(times);
});

When('The user views the home screen', async () => {
  // Aquí podrías agregar una aserción para verificar que la pantalla de inicio se muestra correctamente.
  // Por ejemplo, esperar a que un elemento específico de la pantalla de inicio esté visible.
  await NextScreen.assertViewProfileVisible();
});

When('The user navigates to the login screen', async () => {
  await LoginScreen.goToLogin();
});

When('The user views the login screen', async () => {
    await NextScreen.assertForgotPasswordVisible(); // que tu método verifique que aparece el login screen
  });


const fs = require('fs');
const path = require('path');

When('The user enters valid username and password', async () => {
  // Leer credenciales del último usuario registrado
  let email, password;
  try {
    const tempPath = path.join(__dirname, '../testdata/lastRegisteredUser.json');
    const tempUser = JSON.parse(fs.readFileSync(tempPath, 'utf8'));
    email = tempUser.email;
    password = tempUser.password;
  } catch (e) {
    // Fallback a usuario por defecto
    const { email: defaultEmail, password: defaultPassword } = users.validUser;
    email = defaultEmail;
    password = defaultPassword;
  }
  await LoginScreen.enterUsername(email);
  await LoginScreen.enterPassword(password);
  await LoginScreen.submitLogin();
});

Then('The user should be logged in successfully', async () => {
  await NextScreen.assertViewProfileVisible();

   // Tomar screenshot y adjuntar a Allure
  const allure = require('@wdio/allure-reporter').default;
  const screenshot = await browser.takeScreenshot();
  allure.addAttachment(
    'Pantallazo final - Login exitoso',
    Buffer.from(screenshot, 'base64'),
    'image/png'
  );
});
