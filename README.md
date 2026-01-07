Estructura:

config/
│
├─ package.json  -- > OK
├─ wdio.conf.js  --> OK
├─ .gitignore --> OK
├─ README.md --OK
│
├─ apps/                         # APK/IPA (si aplica) --OK
│   └─ myapp.apk
│
├─ config/                       # configuración por entorno
│   ├─ capabilities.android.js
│   ├─ capabilities.ios.js
│   └─ env.dev.json
│
├─ features/                     # Gherkin -- OK
│   ├─ login/
│   │   ├─ login.feature
│   │   └─ login.data.json       # (opcional) data-driven por feature
│   └─ common/
│       └─ smoke.feature
│
├─ step-definitions/             # steps Cucumber (solo orquestan) --OK
│   ├─ login.steps.js
│   └─ hooks.steps.js            # Before/After (si lo prefieres aquí)
│
├─ pageobjects/                  # POM
│   ├─ base/
│   │   ├─ BasePage.js           # métodos comunes (tap, type, wait...)
│   │   └─ selectors.js          # (opcional) utilidades de selectores
│   │
│   ├─ screens/                  # páginas/pantallas
│   │   ├─ LoginScreen.js
│   │   ├─ HomeScreen.js
│   │   └─ SettingsScreen.js
│   │
│   └─ components/               # componentes reusables (navbar, modal, etc.)
│       ├─ PermissionModal.js
│       └─ BottomNav.js
│
├─ testdata/                     # datos globales (usuarios, etc.) -- OK
│   ├─ users.json
│   └─ fixtures.json
│
├─ utils/                        # utilidades
│   ├─ wait.js
│   ├─ logger.js
│   ├─ env.js
│   └─ random.js
│
└─ reports/                      # evidencias
    ├─ screenshots/
    ├─ videos/                   # (si grabas)
    └─ allure-results/           # (si usas allure)