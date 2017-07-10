const preactCliPostCSS = (config, helpers) => {
    if(!config) { throw Error('You need to pass the config')}
    if(!helpers) { throw Error('You need to pass the helpers')}
    const options = helpers.getPluginsByName(config, 'LoaderOptionsPlugin')
        .find(({ plugin }) => plugin.options.options.postcss)
        .plugin.options.options

    delete options.postcss // will use postcss.config.js
}

module.exports = preactCliPostCSS
