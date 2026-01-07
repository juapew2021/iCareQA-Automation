const BasePage = require('../base/BasePage');

class LaunchScreen extends BasePage {
  get btnContinue() {
    return $('~Continue'); // content-desc="Continue"
  }

  async assertLaunched() {
    await this.waitVisible(this.btnContinue, 20000);
  }

  async tapContinue() {
    await this.waitVisible(this.btnContinue, 20000);
    await this.btnContinue.click();
  }
}

module.exports = new LaunchScreen();
