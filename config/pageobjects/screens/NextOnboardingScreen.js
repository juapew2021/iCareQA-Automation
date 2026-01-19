const BasePage = require('../base/BasePage');
class NextOnboardingScreen extends BasePage  {
  get identifier() {
return $('~View Profile');
  }

  async assertLoaded() {
    await this.waitVisible(this.identifier, 5000);
  }
}

module.exports = new NextOnboardingScreen();