require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },

  plugins: ["import", "simple-import-sort"],
  extends: ["eslint:recommended"],

  rules: {
    eqeqeq: "error",
    "object-shorthand": "error",
    "no-useless-rename": "error",
    "import/no-duplicates": ["error", { "prefer-inline": true }],
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
  },

  overrides: [
    {
      files: ["**/*.{ts,tsx,mts,cts}"],

      parser: require.resolve("@typescript-eslint/parser"),
      parserOptions: {
        project: true,
      },

      plugins: ["@typescript-eslint"],
      extends: [
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:@typescript-eslint/strict-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
      ],

      rules: {
        "@typescript-eslint/no-import-type-side-effects": "error",
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
