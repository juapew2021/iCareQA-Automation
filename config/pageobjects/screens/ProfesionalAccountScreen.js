const BasePage = require('../base/BasePage');
class ProfesionalAccountScreen extends BasePage {
    // Selectors
    get profesionalAccount() {
        return $('~Professional account ');
    }
    // Methods
    async tapProfesionalAccount() {
        await (await this.profesionalAccount).waitForDisplayed({ timeout: 5000 });
        await (await this.profesionalAccount).click();
    }
}
module.exports = new ProfesionalAccountScreen();