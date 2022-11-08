require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: require.resolve("."),

  plugins: ["react", "react-hooks"],
  extends: ["plugin:react-hooks/recommended"],

  rules: {
    "react/no-deprecated": "error",
    "react/jsx-key": "error",
  },
};
