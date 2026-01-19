const BasePage = require('../base/BasePage');

class OnboardingScreen extends BasePage {
  get btnContinue() {
    return $('~Continue'); // mismo en las 3 pantallas
  }

  async assertContinueClickable() {
    await this.btnContinue.waitForDisplayed({ timeout: 5000 });
    await this.btnContinue.waitForEnabled({ timeout: 5000 });
  }

  async clickContinue() {
    await this.btnContinue.click();
  }
}

module.exports = new OnboardingScreen();