module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true,
        'node': true
      },
      'parser': 'babel-eslint',
      'extends': [
        'eslint:recommended',
        'airbnb',
        'airbnb/hooks',
        'plugin:react/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:jsx-a11y/recommended',
        // "plugin:react-hooks/recommended",
        // always put prettier at last
        'prettier'
      ],
      'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
      },
      'parserOptions': {
        'ecmaFeatures': {
          'jsx': true // enable linting for jsx files
        },
        'ecmaVersion': 11,
        'sourceType': 'module'
      },
      'settings': {
        'react': {
          'version': 'detect'
        }
      },
      'plugins': ['react', 'react-hooks'],
      'rules': {
        // NextJs specific fix: suppress errors for missing 'import React' in files for nextjs
        'react/react-in-jsx-scope': 'off',
       // NextJs specific fix: allow jsx syntax in js files
        'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }], // should add ".ts" if typescript project
        'react/display-name': 1,
        'quotes': [2, 'single', { 'avoidEscape': true }],
        'jsx-quotes': [2, 'prefer-single'],
      }
};


/* 
   "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": "plugin:react/recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    } 
    */