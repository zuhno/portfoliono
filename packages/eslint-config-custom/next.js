const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * Next.js apps.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  extends: [
    "@vercel/style-guide/eslint/node",
    "@vercel/style-guide/eslint/typescript",
    "@vercel/style-guide/eslint/browser",
    "@vercel/style-guide/eslint/react",
    "@vercel/style-guide/eslint/next",
    "eslint-config-turbo",
  ].map(require.resolve),
  root: true,
  parserOptions: {
    project,
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ["node_modules/", "dist/"],
  // add rules configurations here
  rules: {
    "import/no-default-export": "off",
    "no-console": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unnecessary-condition": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "turbo/no-undeclared-env-vars": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/naming-convention": "off",
  },
};
