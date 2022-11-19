require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  plugins: ["unicorn"],
  extends: [require.resolve(".")],

  rules: {
    "unicorn/prefer-node-protocol": "error",
  },

  env: {
    node: true,
  },
};
