import globals from 'globals'
import js from '@eslint/js'
import jestPlugin from 'eslint-plugin-jest'
import cypressPlugin from 'eslint-plugin-cypress'

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      js,
    },
    rules: {
      // Legg til dine egne regler her
    },
  },
  {
    files: ['**/*.test.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.jest,
      },
    },
    plugins: {
      jest: jestPlugin,
    },
    rules: {
      'jest/prefer-expect-assertions': 'off',
      'no-undef': 'off',
    },
  },
  {
    files: ['**/*.cy.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals['cypress/globals'],
      },
    },
    plugins: {
      cypress: cypressPlugin,
    },
    rules: {
      'cypress/no-unnecessary-waiting': 'off',
      'no-unused-vars': 'off',
    },
  },
]
