
const BasePage = require('../base/BasePage');

class LoginOnboardingScreen extends BasePage {
  // XPath equivalente a accessibility id "Continue"
  get btnContinue() {
    // Android: @content-desc / @text — iOS: @name/@label
    return $('~Continue');
  }

  async assertLoaded() {
    await this.btnContinue.waitForDisplayed({ timeout: 10000 });
  }

  async assertContinueClickable() {
    await this.btnContinue.waitForDisplayed({ timeout: 5000 });
    await this.btnContinue.waitForEnabled({ timeout: 5000 });
  }

  async clickContinue() {
    await this.btnContinue.click();
  }

  // Helper opcional para pasar N pantallas
  async passScreens(times = 3) {
    for (let i = 0; i < times; i++) {
      await this.assertContinueClickable();
      await this.clickContinue();
      await driver.pause(600); // amortiguar animación/transición
    }
  }
}

module.exports = new LoginOnboardingScreen();
