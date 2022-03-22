/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  "root": true,
  "extends": [
    "eslint:recommended",
  ],
  "env": {
    "vue/setup-compiler-macros": true,
  },
}
