# SSen's Code Conventions

## [`@ssen/eslint-config`](eslint-config)

<!-- source eslint-config/index.js -->

[eslint-config/index.js](eslint-config/index.js)

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

## [`@ssen/prettier-config`](prettier-config)

<!-- source prettier-config/index.json -->

[prettier-config/index.json](prettier-config/index.json)

```json
{
  "$schema": "http://json.schemastore.org/prettierrc",
  "semi": true,
  "singleQuote": true,
  "quoteProps": "consistent",
  "trailingComma": "all",
  "bracketSpacing": true
}
```

<!-- /source -->
