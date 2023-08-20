require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  plugins: ["unicorn"],
  extends: [require.resolve(".")],

  rules: {
    "unicorn/prefer-modern-dom-apis": "error",
    "unicorn/prefer-dom-node-append": "error",
    "unicorn/prefer-dom-node-remove": "error",
    "unicorn/prefer-keyboard-event-key": "error",
    "unicorn/relative-url-style": ["error", "always"],
  },

  env: {
    browser: true,
  },
};
