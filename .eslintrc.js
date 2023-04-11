module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
  extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended', 'prettier'],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'prettier/prettier': 'error',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'no-useless-constructor': 'off',
    'no-empty-function': 'off',
    'no-unused-vars': 'off',
  },
  settings: {
    'import/extensions': ['.js', '.ts'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
};
