const path = require('path');
const fs = require('fs');

const APP_PACKAGE = 'com.company.icarev2';
const RECORD_VIDEO = process.env.RECORD_VIDEO === 'true'; // activa con: RECORD_VIDEO=true
const VIDEO_DIR = path.join(process.cwd(), 'reports', 'videos');

exports.config = {
  runner: 'local',

  specs: ['./features/**/*.feature'],
  exclude: [],

  maxInstances: 1,

  capabilities: [{
    platformName: "Android",
    "appium:automationName": "UiAutomator2",
    "appium:deviceName": "emulator-5554",
    "appium:udid": "emulator-5554",

    "appium:app": "C:\\Users\\Kezman\\Documents\\GitHub\\iCareQA-Automation\\app\\Android\\iCare-release.apk",
    "appium:appPackage": "com.company.icarev2",
    "appium:appActivity": "com.company.icarev2.MainActivity",

    "appium:autoGrantPermissions": true,
    "appium:noReset": true,
    "appium:newCommandTimeout": 120
  }],

  logLevel: 'info',
  bail: 0,

  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  services: [
    'appium'
  ],

  framework: 'cucumber',

  reporters: [
    'spec',
    ['allure', {
      outputDir: 'reports/allure-results',
      disableWebdriverStepsReporting: false,
      disableWebdriverScreenshotsReporting: false,
    }]
  ],

  cucumberOpts: {
    require: ['./step-definitions/**/*.js'],
    backtrace: false,
    requireModule: [],
    dryRun: false,
    failFast: false,
    name: [],
    snippets: true,
    source: true,
    strict: false,
    tagExpression: '',
    timeout: 60000,
    ignoreUndefinedDefinitions: false,
  },

  /**
   * 🎥 Inicia grabación (opcional) antes de cada escenario
   */
  beforeScenario: async function (world) {
    if (!RECORD_VIDEO) return;

    if (!fs.existsSync(VIDEO_DIR)) {
      fs.mkdirSync(VIDEO_DIR, { recursive: true });
    }

    // nombre seguro
    const scenarioName = (world?.pickle?.name || 'scenario')
      .replace(/[\\/:*?"<>|]/g, '_')
      .slice(0, 120);

    // guardamos nombres para afterScenario
    global.__VIDEO_REMOTE__ = `/sdcard/${scenarioName}.mp4`;
    global.__VIDEO_LOCAL__ = path.join(VIDEO_DIR, `${scenarioName}.mp4`);

    // screenrecord corre “en background” y bloquea, por eso lo lanzamos con "sh -c"
    // y lo mandamos al background con "&"
    await driver.execute('mobile: shell', {
      command: 'sh',
      args: ['-c', `screenrecord ${global.__VIDEO_REMOTE__} --bit-rate 6000000 &`],
      includeStderr: true,
    });
  },

  /**
   * 📸 Screenshot automático en fallo (Allure lo recoge)
   */
  afterStep: async function (step, scenario, result) {
    if (result && result.error) {
      await browser.takeScreenshot();
    }
  },

  /**
   * 🗑️ Desinstala app al finalizar el escenario
   * 🎥 Detiene y descarga video si está activo
   * 📎 Adjunta screenshot extra en Allure cuando falla (opcional, pero útil)
   */
  afterScenario: async function (world, result) {
    // 📎 adjuntar screenshot adicional a Allure en fallo (además del afterStep)
    if (result && result.passed === false) {
      try {
        const allure = require('@wdio/allure-reporter').default;
        const screenshot = await browser.takeScreenshot();
        allure.addAttachment(
          'Failure Screenshot (afterScenario)',
          Buffer.from(screenshot, 'base64'),
          'image/png'
        );
      } catch (e) {
        // no bloquear por problemas de reporter
      }
    }

    // 🎥 detener y descargar video
    if (RECORD_VIDEO) {
      try {
        // detener screenrecord (si está corriendo)
        await driver.execute('mobile: shell', {
          command: 'sh',
          args: ['-c', 'pkill -2 screenrecord || true'],
          includeStderr: true,
        });

        // dar tiempo a que se cierre el archivo
        await driver.pause(1500);

        // descargar al PC
        if (global.__VIDEO_REMOTE__ && global.__VIDEO_LOCAL__) {
          // usar adb pull vía shell no funciona como comando directo,
          // así que lo hacemos con "adb pull" desde el host usando mobile:shell NO.
          // Solución: usar "mobile: shell" solo en el device; para pull usamos fs + child_process.
          // Como WDIO hooks no deben depender de tooling extra, dejamos el pull manual.
          // 👉 Alternativa: hacerlo manual al final (comando abajo).
          console.log(`🎥 Video grabado en el device: ${global.__VIDEO_REMOTE__}`);
          console.log(`➡️ Para descargar: adb pull "${global.__VIDEO_REMOTE__}" "${global.__VIDEO_LOCAL__}"`);
        }
      } catch (e) {
        console.warn('⚠️ No se pudo gestionar el video:', e.message);
      }
    }

    // 🗑️ Desinstalar app
    try {
      await driver.removeApp(APP_PACKAGE);
      console.log(`🗑️ App desinstalada: ${APP_PACKAGE}`);
    } catch (err) {
      console.warn(`⚠️ No se pudo desinstalar ${APP_PACKAGE}: ${err.message}`);
    }
  },
};
