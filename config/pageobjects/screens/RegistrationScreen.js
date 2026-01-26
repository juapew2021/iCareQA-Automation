const BasePage = require('../base/BasePage');
class RegistrationScreen extends BasePage {
  get createAccountButton() {
    return $('~Sign up for iCare');
  }

  get participantAccountButton() {
    return $('~Participant account ');
  }

  get registrationView() {
    return $('~* First name');
  }


  get sdregistrationView() {
    return $('~* NDIS participant number')
  }

  get trdregistrationView() {
    return $('~ * Confirm password');
  }

  get chooseAvatarView() {
    return $('~Choose your AVATAR');
  }


  get miamiButton() {
    return $('~Bonnyrigg NSW, Australia');
  }

  get continueButton() {
    return $('~Continue');
  }

  get createButton() {
    return $('~Create');
  }

  get confirmView() {
    return $('~(0)\nAndrés \nSupport  Coordinator\nUnregistered Provider\nExperience  4 years\nBrisbane City');
  }

// Funcion para el scroll hasta el fondo
async swipeByCoordinates() {
  const startX = 1195, startY = 2271;
  const endX   = startX;
  const endY   = startY - 1100; // sube 600px (ajusta según necesites)

  await driver.performActions([{
    type: 'pointer',
    id: 'finger1',
    parameters: { pointerType: 'touch' },
    actions: [
      { type: 'pointerMove', duration: 0, x: startX, y: startY },
      { type: 'pointerDown', button: 0 },
      { type: 'pointerMove', duration: 450, x: endX, y: endY },
      { type: 'pointerUp', button: 0 }
    ]

  }]);

  await driver.pause(1000); // espera a que la animación termine
}

  //Aserciones y acciones
    async tapCreateAccount() {
    await this.createAccountButton.waitForEnabled({ timeout: 10000 });
    await this.createAccountButton.click();
  }

  async selectAccountType() {
    await this.participantAccountButton.waitForEnabled({ timeout: 10000 });
    await this.participantAccountButton.click();
  }

  async selectMiami() {
    await this.miamiButton.waitForEnabled({ timeout: 20000 });
    await this.miamiButton.click();
  }

  async tapContinueButton() {
    await this.continueButton.waitForEnabled({ timeout: 20000 });
    await this.continueButton.click();
  }

  async tapCreateButton() {
    await this.createButton.waitForEnabled({ timeout: 10000 });
    await this.createButton.click();
  }

  async loadconfirmView() {
    await this.confirmView.waitForDisplayed({ timeout: 10000 });
  }

  // First Name input
  async enterFirstName(firstName) {

    await this.registrationView.waitForDisplayed({ timeout: 10000 });
  const x = 534;   
  const y = 970;  

  await driver.performActions([{
    type: 'pointer',
    id: 'finger1',
    parameters: { pointerType: 'touch' },
    actions: [
      { type: 'pointerMove', duration: 0, x, y },
      { type: 'pointerDown', button: 0 },
      { type: 'pause', duration: 60 },
      { type: 'pointerUp', button: 0 }
    ]
  }]);

  // Limpiar campo (sin usar elementos)
  for (let i = 0; i < 40; i++) {
    try { await driver.keys('Backspace'); } catch (_) {}
  }

  // Escribir email en el campo con foco
  await driver.keys(firstName);
// Esconder teclado si está abier
  
}

//Last Name input
async enterLastName(lastName) {
  const x = 529;   
  const y = 1248;  

  await driver.performActions([{
    type: 'pointer',
    id: 'finger1',
    parameters: { pointerType: 'touch' },
    actions: [
      { type: 'pointerMove', duration: 0, x, y },
      { type: 'pointerDown', button: 0 },
      { type: 'pause', duration: 60 },
      { type: 'pointerUp', button: 0 }
    ]
  }]);

  // Limpiar campo (sin usar elementos)
  for (let i = 0; i < 40; i++) {
    try { await driver.keys('Backspace'); } catch (_) {}
  }

  // Escribir email en el campo con foco
  await driver.keys(lastName);

  // Si el teclado esta abierto cerrar, sino el teclado no esta abierto omitir
  
}

///Birth Date input
async enterBirthDate(birthDate) {
  const x = 610;   
  const y = 1526;  

  await driver.performActions([{
    type: 'pointer',
    id: 'finger1',
    parameters: { pointerType: 'touch' },
    actions: [
      { type: 'pointerMove', duration: 0, x, y },
      { type: 'pointerDown', button: 0 },
      { type: 'pause', duration: 60 },
      { type: 'pointerUp', button: 0 }
    ]
  }]);

  // Limpiar campo (sin usar elementos)
  for (let i = 0; i < 40; i++) {
    try { await driver.keys('Backspace'); } catch (_) {}
  }

  await driver.keys(birthDate)
  
}

async enterEmailadress(emailAddres) {
    const x = 512;   
    const y = 1859;  

  await driver.performActions([{
    type: 'pointer',
    id: 'finger1',
    parameters: { pointerType: 'touch' },
    actions: [
      { type: 'pointerMove', duration: 0, x, y },
      { type: 'pointerDown', button: 0 },
      { type: 'pause', duration: 60 },
      { type: 'pointerUp', button: 0 }
    ]
  }]);

  // Limpiar campo (sin usar elementos)
  for (let i = 0; i < 40; i++) {
    try { await driver.keys('Backspace'); } catch (_) {}
  }

  await driver.keys(emailAddres)
    
}

//Confirm Email input
async enterConfirmEmail(confirmEmail) {
    const x = 589;   
    const y = 2202;  //2502  

  await driver.performActions([{
    type: 'pointer',
    id: 'finger1',
    parameters: { pointerType: 'touch' },
    actions: [
      { type: 'pointerMove', duration: 0, x, y },
      { type: 'pointerDown', button: 0 },
      { type: 'pause', duration: 60 },
      { type: 'pointerUp', button: 0 }
    ]
  }]);

  // Limpiar campo (sin usar elementos)
  for (let i = 0; i < 40; i++) {
    try { await driver.keys('Backspace'); } catch (_) {}
  }

  await driver.keys(confirmEmail)
    
}

//Mobile Number input
async enterMobileNumber(mobileNumber) {
    const x = 589;   
    const y = 2502;  

  await driver.performActions([{
    type: 'pointer',
    id: 'finger1',
    parameters: { pointerType: 'touch' },
    actions: [
      { type: 'pointerMove', duration: 0, x, y },
      { type: 'pointerDown', button: 0 },
      { type: 'pause', duration: 60 },
      { type: 'pointerUp', button: 0 }
    ]
  }]);

  // Limpiar campo (sin usar elementos)
  for (let i = 0; i < 40; i++) {
    try { await driver.keys('Backspace'); } catch (_) {}
  }

  await driver.keys(mobileNumber)
    
}


// Suburb
async enterSuburb(suburb) {
    const x = 529;   
    const y = 2060;  

  await driver.performActions([{
    type: 'pointer',
    id: 'finger1',
    parameters: { pointerType: 'touch' },
    actions: [
      { type: 'pointerMove', duration: 0, x, y },
      { type: 'pointerDown', button: 0 },
      { type: 'pause', duration: 60 },
      { type: 'pointerUp', button: 0 }
    ]
  }]);

  // Limpiar campo (sin usar elementos)
  for (let i = 0; i < 40; i++) {
    try { await driver.keys('Backspace'); } catch (_) {}
  }

  await driver.keys(suburb)
    
}

// NDIS number

async enterNdisNumber(ndisNumber) {

    await this.sdregistrationView.waitForDisplayed({ timeout: 10000 });
  const x = 639;   
  const y = 928;  

  await driver.performActions([{
    type: 'pointer',
    id: 'finger1',
    parameters: { pointerType: 'touch' },
    actions: [
      { type: 'pointerMove', duration: 0, x, y },
      { type: 'pointerDown', button: 0 },
      { type: 'pause', duration: 60 },
      { type: 'pointerUp', button: 0 }
    ]
  }]);

  // Limpiar campo (sin usar elementos)
  for (let i = 0; i < 40; i++) {
    try { await driver.keys('Backspace'); } catch (_) {}
  }

  // Escribir email en el campo con foco
  await driver.keys(ndisNumber);
// Esconder teclado si está abier
  
}

// Select disability
async enterTypeDisability() {

    await this.sdregistrationView.waitForDisplayed({ timeout: 10000 });
  const x = 180;   
  const y = 1583;  

  await driver.performActions([{
    type: 'pointer',
    id: 'finger1',
    parameters: { pointerType: 'touch' },
    actions: [
      { type: 'pointerMove', duration: 0, x, y },
      { type: 'pointerDown', button: 0 },
      { type: 'pause', duration: 60 },
      { type: 'pointerUp', button: 0 }
    ]
  }]);
}

  async enterTypeDisability2() {

    await this.sdregistrationView.waitForDisplayed({ timeout: 10000 });
  const x = 180;   
  const y = 1777;  

  await driver.performActions([{
    type: 'pointer',
    id: 'finger1',
    parameters: { pointerType: 'touch' },
    actions: [
      { type: 'pointerMove', duration: 0, x, y },
      { type: 'pointerDown', button: 0 },
      { type: 'pause', duration: 60 },
      { type: 'pointerUp', button: 0 }
    ]
  }]);
  }

   async enterTypeDisability3() {

    await this.sdregistrationView.waitForDisplayed({ timeout: 10000 });
  const x = 180;   
  const y = 1874;  

  await driver.performActions([{
    type: 'pointer',
    id: 'finger1',
    parameters: { pointerType: 'touch' },
    actions: [
      { type: 'pointerMove', duration: 0, x, y },
      { type: 'pointerDown', button: 0 },
      { type: 'pause', duration: 60 },
      { type: 'pointerUp', button: 0 }
    ]
  }]);
  }

//Password input
async enterPassword(password) {

    await this.sdregistrationView.waitForDisplayed({ timeout: 10000 });
  const x = 568;   
  const y = 2429;  

  await driver.performActions([{
    type: 'pointer',
    id: 'finger1',
    parameters: { pointerType: 'touch' },
    actions: [
      { type: 'pointerMove', duration: 0, x, y },
      { type: 'pointerDown', button: 0 },
      { type: 'pause', duration: 60 },
      { type: 'pointerUp', button: 0 }
    ]
  }]);

  // Limpiar campo (sin usar elementos)
  for (let i = 0; i < 40; i++) {
    try { await driver.keys('Backspace'); } catch (_) {}
  }

  // Escribir email en el campo con foco
  await driver.keys(password);
  
}

// Confirm Password input
async enterConfirmPassword(confirmPassword) {

  const x = 512;   
  const y = 2120;  

  await driver.performActions([{
    type: 'pointer',
    id: 'finger1',
    parameters: { pointerType: 'touch' },
    actions: [
      { type: 'pointerMove', duration: 0, x, y },
      { type: 'pointerDown', button: 0 },
      { type: 'pause', duration: 60 },
      { type: 'pointerUp', button: 0 }
    ]
  }]);

  // Limpiar campo (sin usar elementos)
  for (let i = 0; i < 40; i++) {
    try { await driver.keys('Backspace'); } catch (_) {}
  }

  // Escribir email en el campo con foco
  await driver.keys(confirmPassword);
  
}

async touchForContinue() {

  await this.trdregistrationView.waitForDisplayed({ timeout: 10000 });
  const x = 641;   
  const y = 2276;  

  await driver.performActions([{
    type: 'pointer',
    id: 'finger1',
    parameters: { pointerType: 'touch' },
    actions: [
      { type: 'pointerMove', duration: 0, x, y },
      { type: 'pointerDown', button: 0 },
      { type: 'pause', duration: 60 },
      { type: 'pointerUp', button: 0 }
    ]
  }]);
}

  // Select Avatar
async enterSelectAvatar() {
await this.chooseAvatarView.waitForDisplayed({ timeout: 10000 });
  const x = 621;   
  const y = 1455;  

  await driver.performActions([{
    type: 'pointer',
    id: 'finger1',
    parameters: { pointerType: 'touch' },
    actions: [
      { type: 'pointerMove', duration: 0, x, y },
      { type: 'pointerDown', button: 0 },
      { type: 'pause', duration: 60 },
      { type: 'pointerUp', button: 0 }
    ]
  }]);
  
}

}

module.exports = new RegistrationScreen();
