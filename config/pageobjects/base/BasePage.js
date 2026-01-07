class BasePage {
  async waitVisible(element, timeout = 15000) {
    await element.waitForDisplayed({ timeout });
  }

  async isVisible(element, timeout = 5000) {
    try {
      await element.waitForDisplayed({ timeout });
      return true;
    } catch {
      return false;
    }
  }
}

module.exports = BasePage;
