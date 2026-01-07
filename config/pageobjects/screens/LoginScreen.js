const BasePage = require('../base/BasePage');
const assert = require('assert');

class LoginScreen extends BasePage {

  get usernameInput() {
    return $('~input-username'); // usa accessibilityId real
  }

  async waitForLoaded() {
    await this.waitVisible(this.usernameInput);
  }

  async assertLoaded() {
    await this.waitForLoaded();
    assert.ok(
      await this.usernameInput.isDisplayed(),
      'Login screen not visible'
    );
  }
}

module.exports = new LoginScreen();
