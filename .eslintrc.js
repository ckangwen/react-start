module.exports = {
  root: true,
  env: {
    node: true
  },
  "extends": [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  "rules": {
    // "quotes": [2, "single"],
    // "react/jsx-uses-react": "error",
    // "react/jsx-uses-vars": "error",
    // "react/prop-types": [1, { "ignore": ["children", "key"] }],
    camelcase: 0,
    'react/jsx-one-expression-per-line': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-indent': 0,
    'react/jsx-wrap-multilines': ['error', { declaration: false, assignment: false }],
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-has-content': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/jsx-filename-extension': 0,
    'react/state-in-constructor': 0,
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'react/default-props-match-prop-types': 0,
    'import/no-cycle': 0,
    'react/no-find-dom-node': 0,
    'no-underscore-dangle': 0,
    'react/sort-comp': 0,
    'jsx-a11y/label-has-for': 0,
    'no-plusplus': 0,
    'react/display-name': 0,
    'no-restricted-globals': 0,
    'max-classes-per-file': 0,
    'react/static-property-placement': 0,
  },
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  "plugins": [
    "react",
  ],
}
