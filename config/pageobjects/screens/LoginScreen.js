
const BasePage = require('../base/BasePage');
const assert = require('assert');
const NextScreen = require('./NextScreen');

class LoginScreen extends BasePage {
get inputEmail() {
    return $('//android.view.View[@content-desc="Log in to your iCare account Email address Password"]/android.widget.EditText[1]');
  }
  get inputPassword() {
    return $('//android.view.View[@content-desc="Log in to your iCare account Email address Password"]/android.widget.EditText[2]');
  }
  // Botón para enviar el formulario (Log In)
  get btnSubmitLogin() {
    return $('~Log in');
  }

  async assertLoaded() {
    // Consideramos cargado el login cuando el campo email es visible
    await this.inputEmail.waitForDisplayed({ timeout: 10000 });
  }

  
async goToLogin() {
    // Asegura contexto nativo y que no haya teclado/overlays
    try { 
      const ctx = await driver.getContext();
      if (ctx !== 'NATIVE_APP') await driver.switchContext('NATIVE_APP');
    } catch (_) {}
    try { await driver.hideKeyboard(); } catch (_) {}

    // Tus coordenadas absolutas (de tu captura): X=1128, Y=2660
    const x = 1128;
    const y = 2660;

    // Tap por acciones de puntero (recomendado)
    await driver.performActions([{
      type: 'pointer',
      id: 'finger1',
      parameters: { pointerType: 'touch' },
      actions: [
        { type: 'pointerMove', duration: 0, x, y },
        { type: 'pointerDown', button: 0 },
        { type: 'pause', duration: 80 },
        { type: 'pointerUp', button: 0 }
      ]
    }]);

    // Opcional: pequeña espera a que termine la animación y valida que cargó el login
    await driver.pause(300);
    await NextScreen.assertForgotPasswordVisible(); // que tu método verifique que aparecen email/password
  }



  
async enterUsername(email) {
  // Tap para enfocar el input (coordenadas del campo)
  const x = 622;   // 591
  const y = 1221;  // 1596

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

  // Limpiar campo (sin usar elementos)
  for (let i = 0; i < 40; i++) {
    try { await driver.keys('Backspace'); } catch (_) {}
  }

  // Escribir email en el campo con foco
  await driver.keys(email);
// Esconder teclado si está abierto
try { await driver.hideKeyboard(); } catch (_) {}
  
}


  async enterPassword(password) {
  // Tap para enfocar el input (coordenadas del campo)
  const x = 591;   // 591
  const y = 1536;  // 1596

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

  // Limpiar campo (sin usar elementos)
  for (let i = 0; i < 40; i++) {
    try { await driver.keys('Backspace'); } catch (_) {}
  }

  // Escribir email en el campo con foco
  await driver.keys(password);
// Esconder teclado si está abierto
try { await driver.hideKeyboard(); } catch (_) {}
}

  async submitLogin() {
    await this.btnSubmitLogin.waitForEnabled({ timeout: 10000 });
    await this.btnSubmitLogin.click();
  }

  async assertLoggedIn() {
    // Reemplaza el locator por un elemento inequívoco de la pantalla post-login
    const homeMarker = $('//android.view.View[@content-desc="Home Favorite 0 Message Maps Profile"]/android.widget.ImageView[4]');
    await homeMarker.waitForDisplayed({ timeout: 15000 });
  }
}

module.exports = new LoginScreen();
