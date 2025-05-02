module.exports = {
  env: {
    browser: true,
    es2024: true,
    'cypress/globals': true,
  },
  extends: [
    'standard',
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:cypress/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['jsx-a11y', 'import', 'react', 'react-hooks', 'prettier', 'cypress'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/destructuring-assignment': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.js',
          '**/*.spec.js',
          '**/*.spec.jsx',
          '**/*.stories.js',
          'cypress/**/*.js',
          'cypress/**/*.jsx',
          '**/cypress.config.js',
        ],
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        controlComponents: ['Input'],
        depth: 3,
      },
    ],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
      },
    ],
    'max-len': [
      'error',
      {
        code: 100,
        ignoreComments: true,
        ignoreTemplateLiterals: true,
        ignoreStrings: true,
      },
    ],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/require-default-props': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-underscore-dangle': 'off',
    'react/forbid-prop-types': 'off',
    'react/no-array-index-key': 'warn',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json'],
        paths: ['src'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/*.spec.js', '**/*.test.js', '**/*.spec.jsx'],
      env: {
        jest: true,
      },
      rules: {
        'max-len': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['*.scss'],
      rules: {
        'max-len': 'off',
      },
    },
  ],
};
