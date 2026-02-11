class AppPage {

  async isAppInstalled(appPackage) {
    return await driver.isAppInstalled(appPackage);
  }

  async launchApp() {
    await driver.launchApp();
  }

  async resetApp() {
    await driver.reset();
  }

  async terminateApp(appPackage) {
    await driver.terminateApp(appPackage);
  }
}

module.exports = new AppPage();
