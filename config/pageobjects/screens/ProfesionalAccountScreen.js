const BasePage = require('../base/BasePage');
class ProfesionalAccountScreen extends BasePage {

// Scrolls
async scrollToContinue() {
  const startX = 1232, startY = 2327;
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
}
    
// Taps or clicks
    
async tapPlan(rowY = 616, startX = 1057) {
    await this.planView.waitForDisplayed({ timeout: 5000 });
    const x = startX;
    const y = rowY;
  
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
    // Selectors
    get profesionalAccount() {
        return $('~Professional account ');
    }

    get chooseMembership() {
        return $('~Choose Membership');
    }

    get planView() {
        return $('~BASIC');
    }

    get firstNameSpace() {
        return $('//android.widget.ScrollView/android.widget.EditText[1]');
    }

    get lastNameSpace(){
        return $('//android.widget.ScrollView/android.widget.EditText[2]')
    }

    get companyNameSpace(){
        return $('//android.widget.ScrollView/android.widget.EditText[3]')
    }

    get emailAddressSpace(){
        return $('//android.widget.ScrollView/android.widget.EditText[4]')
    }

    get confirmEmailAddressSpace(){
        return $('//android.widget.ScrollView/android.widget.EditText[5]')
    }

    get createAccountView(){
        return $('~  * ABN Registration')
    }

    get serviceSpace(){
      return $('~Type of service offered')
    }

    get typeServiceSpace(){
      return $('~Support  Coordinator')
    }

    get statusSpace(){
      return $('~Registered or Unregistered ')
    }

    get typeStatusSpace(){
      return $('~Unregistered')
    }

    get ageSpace(){
      return $('~Please select...')
    }

    get typeAgeSpace(){
      return $('~25-40 years')
    }

    get checkBoxSpace(){
      return $('//android.widget.CheckBox')
    }

    get createProfileBtn(){
      return $('~Create Profile')
    }

    get uploadVideoBtn(){
      return $('~Upload video')
    }

    get genderSpace(){
      return $('~Please select...')
    }

    get typeGenderSpace(){
      return $('~Male')
    }

    // Methods
    async tapProfesionalAccount() {
        await (await this.profesionalAccount).waitForDisplayed({ timeout: 5000 });
        await (await this.profesionalAccount).click();
    }

    async tapChooseMembership() {
        await (await this.chooseMembership).waitForDisplayed({ timeout: 5000 });
        await (await this.chooseMembership).click();
    }

    async enterFirstNameSpace(firstName) {
        await this.firstNameSpace.waitForDisplayed({ timeout: 5000 });
        await this.firstNameSpace.setValue(firstName);
    }

    async enterLastNameSpace(lastName){
        await this.lastNameSpace.waitForDisplayed({ timeout: 5000})
        await this.lastNameSpace.click();
        await this.lastNameSpace.setValue(lastName);
    }

    async enterNameCompany(companyName){
        await this.companyNameSpace.waitForDisplayed({ timeout: 5000})
        await this.companyNameSpace.click();
        await this.companyNameSpace.setValue(companyName);
    }

    async enterEmailAddress(emailAddress){
        await this.emailAddressSpace.waitForDisplayed({ timeout: 5000})
        await this.emailAddressSpace.click();
        await this.emailAddressSpace.setValue(emailAddress);
    }

    async enterConfirmEmailAddress(confirmEmailAddress){
        await this.confirmEmailAddressSpace.waitForDisplayed({ timeout: 5000})
        await this.confirmEmailAddressSpace.click();
        await this.confirmEmailAddressSpace.setValue(confirmEmailAddress);
    }

async enterABN(abn) {
  const x = 578;   
  const y = 2453;  

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

  for (let i = 0; i < 40; i++) {
    try { await driver.keys('Backspace'); } catch (_) {}
  }

  await driver.keys(abn);
  
}

async enterMobileNumber(mobileNumber) {
  const x = 529;   
  const y = 1853;  

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

  for (let i = 0; i < 40; i++) {
    try { await driver.keys('Backspace'); } catch (_) {}
  }

  await driver.keys(mobileNumber);
  
}

async enterSuburb(suburb) {
  const x = 529;   
  const y = 2153;  

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

  for (let i = 0; i < 40; i++) {
    try { await driver.keys('Backspace'); } catch (_) {}
  }

  await driver.keys(suburb);
  await driver.pause(3000);
}


async selectSuburb() {
    const x = 627;
    const y = 828;
  
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
  await driver.pause(3000);
}

async enterService(){
        await this.serviceSpace.waitForDisplayed({ timeout: 5000})
        await this.serviceSpace.click();
    }

async enterTypeService(){
        await this.typeServiceSpace.waitForDisplayed({ timeout: 5000})
        await this.typeServiceSpace.click();
    }

async enterStatus(){
        await this.statusSpace.waitForDisplayed({ timeout: 5000})
        await this.statusSpace.click();
    }

async enterTypeStatus(){
        await this.typeStatusSpace.waitForDisplayed({ timeout: 5000})
        await this.typeStatusSpace.click();
    }

async enterAge(){
        await this.ageSpace.waitForDisplayed({ timeout: 5000})
        await this.ageSpace.click();
      }

async enterTypeAge(){
        await this.typeAgeSpace.waitForDisplayed({ timeout: 5000})
        await this.typeAgeSpace.click();
    }

// enterExperience
async enterExperience(experience) {

  const x = 496;   
  const y = 1935;  

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

  for (let i = 0; i < 40; i++) {
    try { await driver.keys('Backspace'); } catch (_) {}
  }

  await driver.keys(experience);
  await driver.pause(2000);
}  

// enterPassword
async enterPassword(password) {
  const x = 496;   
  const y = 2246;  

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

  for (let i = 0; i < 40; i++) {
    try { await driver.keys('Backspace'); } catch (_) {}
  }

  await driver.keys(password);
  await driver.pause(2000);
}

//enterConfirmPassword
async enterConfirmPassword(confirmPassword) {
  const x = 496;   
  const y = 1870;  

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

  for (let i = 0; i < 40; i++) {
    try { await driver.keys('Backspace'); } catch (_) {}
  }

  await driver.keys(confirmPassword);
  await driver.pause(2000);
} 
    
async enterCheckBox(){
        await this.checkBoxSpace.waitForDisplayed({ timeout: 5000})
        await this.checkBoxSpace.click();
}

async selectMultipleWorkDaysMorning(rowY = 1401, startX = 540, count = 5, step = 81) {
  for (let i = 0; i < count; i++) {
    const x = startX + (i * step);
    const y = rowY;
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
    await driver.pause(300); // Pequeña pausa entre clicks
  }
}

async selectMultipleWorkDaysAfternoon(rowY = 1504, startX = 540, count = 5, step = 81) {
  for (let i = 0; i < count; i++) {
    const x = startX + (i * step);
    const y = rowY;
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
    await driver.pause(300); // Pequeña pausa entre clicks
  }
}

async selectPhoto(rowY = 1515, startX = 414) {
    await driver.pause(4000);
    const x = startX;
    const y = rowY;
  
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
  await driver.pause(3000);
}

async enterCreateProfile(){
        await this.createProfileBtn.waitForDisplayed({ timeout: 5000})
        await this.createProfileBtn.click();
    }

async enterUploadVideo(){
    await this.uploadVideoBtn.waitForDisplayed({ timeout: 5000})
    await this.uploadVideoBtn.click();
    }

async enterGender(){
    await this.genderSpace.waitForDisplayed({ timeout: 5000})
    await this.genderSpace.click();
    }

async enterTypeGender(){
    await this.typeGenderSpace.waitForDisplayed({ timeout: 5000})
    await this.typeGenderSpace.click();
    }

async enterDescription(description) {
  const x = 600;   
  const y = 1782;  

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

  for (let i = 0; i < 40; i++) {
    try { await driver.keys('Backspace'); } catch (_) {}
  }

  await driver.keys(description);
  await driver.pause(2000);
} 
  }
module.exports = new ProfesionalAccountScreen();