require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  plugins: ["react", "react-hooks", "jsx-a11y"],
  extends: [
    require.resolve("./web"),
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/strict",
  ],

  rules: {
    "react/no-deprecated": "error",
    "react/jsx-key": "error",
    "react/jsx-no-target-blank": "error",
  },
};
