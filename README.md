# preact-cli-lodash

Minify build when using lodash and preact-cli

## Getting Started

Install it via npm:

```shell
npm install preact-cli-lodash
```

yarn:

```shell
yarn add preact-cli-lodash --dev
```

This will install:

  - [lodash](https://lodash.com/)
  - [lodash-webpack-plugin](https://www.npmjs.com/package/lodash-webpack-plugin)
  - [babel-plugin-lodash](https://github.com/lodash/babel-plugin-lodash)

And include in your project by creating a `preact.config.js`

```javascript
const preactCliLodash = require('preact-cli-lodash');

export default function (config) {
	preactCliLodash(config);
}
```

## Arguments

If you want to pass options to the `lodash-webpack-plugin` you can as the second argument of the `preactCliLodash` function like so:

```javascript
const preactCliLodash = require('preact-cli-lodash');

export default function (config) {
	preactCliLodash(config, {
    'collections': true,
    'paths': true
  });
}
```

## License

MIT
