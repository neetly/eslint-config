require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  plugins: ["react", "react-hooks", "jsx-a11y"],
  extends: [
    require.resolve("."),
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
  ],

  rules: {
    "react/no-deprecated": "error",
    "react/jsx-key": "error",
    "react/jsx-no-target-blank": "error",
  },
};
