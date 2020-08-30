# Prettier config

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