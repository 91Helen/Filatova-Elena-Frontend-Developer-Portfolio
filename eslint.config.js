import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig } from 'eslint/config' 

export default defineConfig([
  {
    ignores: ['dist', 'vite.config.js'],
  },
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
    ],
    plugins: {
        'react-refresh': reactRefresh,
    },
    rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, 
      },
      parserOptions: { 
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true } 
      },
    },
  },
])