require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  plugins: ["react", "react-hooks"],
  extends: [require.resolve("."), "plugin:react-hooks/recommended"],

  rules: {
    "react/no-deprecated": "error",
    "react/jsx-key": "error",
    "react/jsx-no-target-blank": "error",
  },
};
