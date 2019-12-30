const preactCliPostCSS = (config, helpers) => {
    if(!config) { throw Error('You need to pass the config')}
    if(!helpers) { throw Error('You need to pass the helpers')}
    const postcssLoader = helpers.getLoadersByName(config, 'postcss-loader')

    if (postcssLoader)
        postcssLoader.forEach(({ loader }) => delete loader.options)
}

module.exports = preactCliPostCSS
