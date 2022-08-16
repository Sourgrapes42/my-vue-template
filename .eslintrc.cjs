const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  root: true,
  env: {
    node: true,
    browser: true,
    es2022: true,
    "vue/setup-compiler-macros": true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
});
