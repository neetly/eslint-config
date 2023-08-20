require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  plugins: ["n", "unicorn"],
  extends: [require.resolve(".")],

  rules: {
    "n/no-deprecated-api": "error",
    "unicorn/prefer-node-protocol": "error",
    "unicorn/text-encoding-identifier-case": "error",
  },

  env: {
    node: true,
  },
};
