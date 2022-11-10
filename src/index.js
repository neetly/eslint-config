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

      plugins: ["@typescript-eslint", "import"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],

      rules: {
        "@typescript-eslint/consistent-type-imports": [
          "error",
          { fixStyle: "inline-type-imports" },
        ],
        "@typescript-eslint/consistent-type-exports": [
          "error",
          { fixMixedExportsWithInlineTypeSpecifier: true },
        ],
        "import/no-duplicates": "error",
        "import/consistent-type-specifier-style": ["error", "prefer-inline"],
      },

      settings: {
        "import/parsers": {
          [require.resolve("@typescript-eslint/parser")]: [
            ".ts",
            ".tsx",
            ".mts",
            ".cts",
          ],
        },
        "import/resolver": {
          [require.resolve("eslint-import-resolver-typescript")]: {
            project: ["**/tsconfig.json"],
            extensions: [".ts", ".tsx", ".d.ts", ".js"],
            extensionAlias: {
              ".js": [".ts", ".tsx", ".d.ts", ".js"],
              ".mjs": [".mts", ".d.mts", ".mjs"],
              ".cjs": [".cts", ".d.cts", ".cjs"],
            },
          },
        },
      },
    },
  ],

  reportUnusedDisableDirectives: true,
};
