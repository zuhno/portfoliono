module.exports = {
  extends: ["custom/next"],
  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-namespace": "off",
    "import/no-extraneous-dependencies": [
      "warn",
      {
        devDependencies: false,
        includeInternal: false,
        includeTypes: false,
        packageDir: [".", "../.."],
      },
    ],
  },
};
