require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  parserOptions: {
    ecmaVersion: "latest",
  },

  env: {
    es2022: true,
  },

  plugins: ["simple-import-sort"],
  extends: ["eslint:recommended"],

  rules: {
    eqeqeq: "error",
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
  },

  overrides: [
    {
      files: ["**/*.{ts,tsx,mts,cts}"],

      parser: require.resolve("@typescript-eslint/parser"),
      parserOptions: {
        project: ["**/tsconfig.json"],
      },

      plugins: ["@typescript-eslint"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],

      rules: {
        "@typescript-eslint/no-duplicate-imports": "error",
        "@typescript-eslint/consistent-type-imports": [
          "error",
          { fixStyle: "inline-type-imports" },
        ],
        "@typescript-eslint/consistent-type-exports": [
          "error",
          { fixMixedExportsWithInlineTypeSpecifier: true },
        ],
      },
    },
  ],

  reportUnusedDisableDirectives: true,
};
