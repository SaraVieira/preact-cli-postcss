const preactCliPostCSS = (config) => {
  if(!config) { return throw Error('You need to pass the helpers')}
    const options = config.getPluginsByName(config, 'LoaderOptionsPlugin')
        .find(({ plugin }) => plugin.options.options.postcss)
        .plugin.options.options

    delete options.postcss // will use postcss.config.js
}

module.exports = preactCliPostCSS
