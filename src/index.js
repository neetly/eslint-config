require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  overrides: [
    {
      files: ["**/*.{ts,tsx,mts,cts}"],

      parser: require.resolve("@typescript-eslint/parser"),
      parserOptions: {
        project: ["**/tsconfig.json"],
      },

      plugins: ["@typescript-eslint", "simple-import-sort"],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],

      rules: {
        eqeqeq: "error",
        "@typescript-eslint/no-duplicate-imports": "error",
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/consistent-type-exports": "error",
        "simple-import-sort/imports": "warn",
        "simple-import-sort/exports": "warn",
      },
    },

    {
      files: ["**/*.{js,mjs,cjs}"],

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
    },
  ],
};
