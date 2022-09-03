/* eslint-env node */

require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  overrides: [
    {
      files: ["**/*.{ts,tsx,mts,cts}"],

      parserOptions: {
        EXPERIMENTAL_useSourceOfProjectReferenceRedirect: true,
      },
    },
  ],
};
