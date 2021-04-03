const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

(async () => {
  const eslintConfig = await fetch('https://raw.githubusercontent.com/facebook/create-react-app/master/packages/eslint-config-react-app/package.json').then(res => res.json());
  const prettierConfig = await fetch('https://raw.githubusercontent.com/prettier/eslint-config-prettier/main/package-real.json').then(res => res.json());
  
  const eslintConfigReactApp = `^${eslintConfig['version']}`;
  const {eslint, ...dependencies} = eslintConfig['peerDependencies'];
  
  const eslintConfigPrettier = `^${prettierConfig['version']}`;
  
  const packageJsonFile = path.resolve(__dirname, './eslint-config/package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonFile, 'utf8'));
  
  fs.writeFileSync(packageJsonFile, JSON.stringify({
    ...packageJson,
    dependencies: {
      'eslint-config-react-app': eslintConfigReactApp,
      'eslint-config-prettier': eslintConfigPrettier,
      ...dependencies,
    },
    devDependencies: {
      eslint,
    },
    peerDependencies: {
      eslint,
    },
    optionalDependencies: {
      react: '>=16',
      typescript: '>=4',
    },
  }, null, 2), {encoding: 'utf8'});
})();
