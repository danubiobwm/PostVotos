module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',

  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    "eslint-plugin-react"
  ],
  rules: {

    "class-methods-use-this": "off",
    'react/state-in-constructor': 'off',
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "import/prefer-default-export": "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "react/jsx-one-expression-per-line": "off",
    "global-require": "off",
    "react-native/no-raw-text": "off",
    "no-param-reassign": "off",
    "no-underscore-dangle": "off",
    "camelcase": "off",
    "no-console": ["error", { allow: ["tron"] }],
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": ["error", { "ignore": ["navigation"] }],
    "react/static-property-placement": "off",
    "react/prop-types": "off",
    "react/prefer-stateless-function": [0, { "ignorePureComponents": 0 }],
    "react/destructuring-assignment": [0, 'always'],"react/sort-comp": [0, {
      "order": [
        "constructor",
        "lifecycle",
        "everything-else",
        "render"
      ]
    }]



  },
};
