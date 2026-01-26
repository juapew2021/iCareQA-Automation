
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

When('The user enters valid username and password', async () => {
  // Mejores prácticas: lee credenciales de variables de entorno o de un vault
  
  const { email, password } = users.validUser;
  await LoginScreen.enterUsername(email);
  await LoginScreen.enterPassword(password);
  await LoginScreen.submitLogin();
});

Then('The user should be logged in successfully', async () => {
  await NextScreen.assertViewProfileVisible();
});
