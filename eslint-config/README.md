# ESLint config

## Usage

Install.

```sh
npm install eslint @ssen/eslint-config eslint-config-prettier --save-dev
```

Add config files.

`.eslintrc.js`

```js
module.exports = {
  extends: ['@ssen', 'prettier', 'prettier/react', 'prettier/@typescript-eslint'],
};
```

`.eslintignore`

```ignore
node_modules
out
```