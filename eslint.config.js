import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier/recommended';

export default [
  js.configs.recommended,
  prettier, // Adicione isto por último
  {
    rules: {
      'prettier/prettier': 'error',
    },
  },
];
