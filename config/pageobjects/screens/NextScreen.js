const BasePage = require('../base/BasePage');
class NextScreen extends BasePage  {
  get ViewProfile() {
return $('~View Profile');
  }

  get btnForgotPassword() {
return $('~Forgot your password');
}

  async assertViewProfileVisible() {
    await this.ViewProfile.waitForDisplayed({ timeout: 10000 });
  }


  async assertForgotPasswordVisible() {
    await this.btnForgotPassword.waitForDisplayed({ timeout: 10000 });
}
}
module.exports = new NextScreen();