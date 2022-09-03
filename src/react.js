/* eslint-env node */

require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: "./index.js",

  overrides: [
    {
      files: ["**/*.{ts,tsx,mts,cts}"],

      plugins: ["react", "react-hooks"],
      extends: ["plugin:react-hooks/recommended"],

      rules: {
        "react/no-deprecated": "error",
        "react/jsx-key": "error",
      },
    },
  ],
};
