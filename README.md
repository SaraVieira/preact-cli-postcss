# preact-cli-postcss

Removes default postcss config and instead will use postcss.config.js



## Getting Started

Install it via npm:

```shell
npm install preact-cli-postcss
```

yarn:

```shell
yarn add preact-cli-postcss --dev
```

And include in your project by creating a `preact.config.js`

```javascript
const preactCliPostCSS = require('preact-cli-postcss');

export default function (config, env, helpers) {
	preactCliPostCSS(config, helpers);
}
```

## License

MIT
