# Prettier config

<!-- source index.json -->

[index.json](index.json)

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

## Usage

Install.

```sh
npm install prettier @ssen/prettier-config --save-dev
```

Add config files.

`.prettierrc.js`

```js
module.exports = {
  ...require('@ssen/prettier-config'),
};
```

`.prettierignore`

```ignore
node_modules
out
```
