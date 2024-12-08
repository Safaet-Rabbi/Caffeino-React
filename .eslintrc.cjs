module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // Disable the unused vars warning for React
    'no-unused-vars': ['warn', { 
      varsIgnorePattern: '^React$',
      argsIgnorePattern: '^_'
    }],
    // Add key prop to mapped elements
    'react/jsx-key': ['error', { 
      checkKeyMustBeUniqueForAllIterators: true 
    }],
    // Allows using React import in newer versions without warning
    'react/react-in-jsx-scope': 'off',
  },
};