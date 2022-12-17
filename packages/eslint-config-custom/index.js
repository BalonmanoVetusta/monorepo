module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['next', 'plugin:react/recommended', 'turbo', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    // "no-unused-vars": "off",
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/forbid-prop-types': 'off',
    'react/prop-types': 'off',
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
    // defaultProps rule to be deprecated on function components
    // https://github.com/reactjs/rfcs/pull/107
    'react/require-default-props': [
      'error',
      {
        ignoreFunctionalComponents: true,
      },
    ],
    'react/no-unknown-property': [
      'error',
      {
        ignore: ['jsx', 'global'],
      },
    ],
  },
};
