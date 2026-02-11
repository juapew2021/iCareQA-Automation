const { Given, When, Then } = require('@wdio/cucumber-framework');
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

When('The user navigates to the login screen profesional account', async () => {
  await LoginScreen.goToLogin();
});

When('The user creates a new account profesional account', async () => {
  await RegistrationScreen.tapCreateAccount();
});

// Scenario steps
Given('The user chooses profesional account type', async () => {
  await ProfesionalAccountScreen.tapProfesionalAccount();
});

When('The user confirm that wants to create a new profesional account, then tap continue', async () => {
  await RegistrationScreen.tapContinueButton();
});

When('The user scrolls and selects the {string} they want', async function (plan) {
  this.plan = plan;
  await ProfesionalAccountScreen.scrollToContinue();
  await ProfesionalAccountScreen.tapChooseMembership();
  if (plan === 'BASIC') {
    await ProfesionalAccountScreen.tapPlan();
  } else if (plan === 'STANDARD') {
    await ProfesionalAccountScreen.tapPlan(1417, 1041);
  } else if (plan === 'PREMIUM') {
    await ProfesionalAccountScreen.tapPlan(2398, 1041);
  }
  await ProfesionalAccountScreen.scrollToContinue();
  await RegistrationScreen.tapContinueButton();
});


const fs = require('fs');
const path = require('path');

When('The user completes the first form', async function () {
  const planMap = {
    BASIC: 'professionalAccountBasic',
    STANDARD: 'professionalAccountStandard',
    PREMIUM: 'professionalAccountPremium'
  };
  const planKey = (this.plan || 'BASIC').trim().toUpperCase();
  const userKey = planMap[planKey];
  const userData = users[userKey];

  // Incrementar el número del correo antes del @
  function getNextEmail(email) {
    return email.replace(/(\d+)?(?=@)/, (match) => match ? Number(match) + 1 : '1');
  }
  userData.emailAddress = getNextEmail(userData.emailAddress);
  userData.confirmEmailAddress = userData.emailAddress;

  // Actualizar users.json en disco
  const usersPath = path.join(__dirname, '../testdata/users.json');
  const usersFile = JSON.parse(fs.readFileSync(usersPath, 'utf8'));
  usersFile[userKey].emailAddress = userData.emailAddress;
  usersFile[userKey].confirmEmailAddress = userData.confirmEmailAddress;
  fs.writeFileSync(usersPath, JSON.stringify(usersFile, null, 4));

  await ProfesionalAccountScreen.enterFirstNameSpace(userData.firstName);
  await ProfesionalAccountScreen.enterLastNameSpace(userData.lastName);
  await ProfesionalAccountScreen.enterNameCompany(userData.companyName);
  await ProfesionalAccountScreen.enterEmailAddress(userData.emailAddress);
  await ProfesionalAccountScreen.enterConfirmEmailAddress(userData.confirmEmailAddress);
  await ProfesionalAccountScreen.enterABN(userData.abn);
  await ProfesionalAccountScreen.scrollToContinue();
  await ProfesionalAccountScreen.enterMobileNumber(userData.mobileNumber);
  await ProfesionalAccountScreen.enterSuburb(userData.suburb);
  await ProfesionalAccountScreen.selectSuburb();
  await RegistrationScreen.tapContinueButton();
});


When('The user completes the second form', async function () {
  const planMap = {
    BASIC: 'professionalAccountBasic',
    STANDARD: 'professionalAccountStandard',
    PREMIUM: 'professionalAccountPremium'
  };
  const planKey = (this.plan || 'BASIC').trim().toUpperCase();
  const userKey = planMap[planKey];
  const userData = users[userKey];

  await ProfesionalAccountScreen.enterService();
  await ProfesionalAccountScreen.enterTypeService();
  await driver.back();
  await ProfesionalAccountScreen.enterStatus();
  await ProfesionalAccountScreen.enterTypeStatus();
  await ProfesionalAccountScreen.enterAge();
  await ProfesionalAccountScreen.enterTypeAge();
  await ProfesionalAccountScreen.enterExperience(userData.experience);
  await ProfesionalAccountScreen.enterPassword(userData.password);
  await ProfesionalAccountScreen.scrollToContinue();
  await ProfesionalAccountScreen.enterConfirmPassword(userData.confirmPassword);
  await ProfesionalAccountScreen.enterCheckBox();
  await RegistrationScreen.tapContinueButton();
});

When('The premium user selects the age and writes a brief description', async function () {
  // Solo ejecuta este paso si el plan es PREMIUM
  const planKey = (this.plan || 'BASIC').trim().toUpperCase();
  if (planKey !== 'PREMIUM') return;

  await ProfesionalAccountScreen.enterDescription('About me...');
  await driver.pause(3000);
  await ProfesionalAccountScreen.enterGender();
  await ProfesionalAccountScreen.enterTypeGender();
  await RegistrationScreen.tapContinueButton();
  // Si necesitas escribir una descripción:

});

When('The user selects how many working days they want', async () => {
  await ProfesionalAccountScreen.selectMultipleWorkDaysMorning();
  await ProfesionalAccountScreen.selectMultipleWorkDaysAfternoon();
  await RegistrationScreen.tapContinueButton();
});

When('The user must upload a profile photo', async () => {
  await ProfesionalAccountScreen.selectPhoto();
  await ProfesionalAccountScreen.selectPhoto(2415, 621);
  await ProfesionalAccountScreen.selectPhoto(1608, 223);
  await ProfesionalAccountScreen.enterCreateProfile();
});

When('The user must upload a video', async () => {
  await ProfesionalAccountScreen.enterUploadVideo();
  await ProfesionalAccountScreen.selectPhoto(2415, 621);
  await ProfesionalAccountScreen.selectPhoto(1608, 223);
  await driver.back();
  await driver.pause(6000);
});

Then('The user views principal menu', async () => {
await driver.pause(1000);

  // Tomar screenshot y adjuntar a Allure
  const allure = require('@wdio/allure-reporter').default;
  const screenshot = await browser.takeScreenshot();
  allure.addAttachment(
    'Registro exitoso',
    Buffer.from(screenshot, 'base64'),
    'image/png'
  );

  });
