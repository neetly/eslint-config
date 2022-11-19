require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  parserOptions: {
    ecmaVersion: "latest",
  },

  env: {
    es2022: true,
  },

  plugins: ["import", "simple-import-sort"],
  extends: ["eslint:recommended"],

  rules: {
    eqeqeq: "error",
    "import/no-duplicates": "error",
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
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/consistent-type-exports": [
          "error",
          { fixMixedExportsWithInlineTypeSpecifier: true },
        ],
      },
    },
  ],

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

  reportUnusedDisableDirectives: true,
};
