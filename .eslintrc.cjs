/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,

  env: {
    node: true,
    es2021: true
  },

  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "script" // keep legacy require() happy
  },

  // 1. Globally, we turn everything OFF or set to "quiet"
  "extends": "eslint:recommended",
  "rules": {
    "no-unused-vars": "off",
    "no-undef": "off",
    "no-console": "off"
  },
  // 2. ONLY files ending in .ts.js get the strict rules
  "overrides": [
    {
      "files": ["services/*.js"],
      "rules": {
        "no-unused-vars": "error",
        "no-undef": "error",
        "no-unreachable": "error",
        "eqeqeq": ["error", "always"],
        "no-const-assign": "error",
        "no-duplicate-imports": "error"
      }
    }
  ]
};
