# ESLint config

<!-- source index.js -->

[index.js](index.js)

```js
module.exports = {
  extends: [
    require.resolve('eslint-config-react-app'),
    require.resolve('eslint-config-react-app/jest'),
    require.resolve('eslint-config-prettier'),
  ],

  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['warn'],
      },
    },
    {
      files: ['**/*.stories.{js,jsx,ts,tsx}'],
      rules: {
        'import/no-anonymous-default-export': 'off',
        'react-hooks/rules-of-hooks': 'off',
      },
    },
  ],
};
```

<!-- /source -->

## Usage

Install.

```sh
npm install eslint @ssen/eslint-config --save-dev
```

Add config files.

`.eslintrc.js`

```js
module.exports = {
  extends: ['@ssen'],
};
```

`.eslintignore`

```ignore
node_modules
out
```
