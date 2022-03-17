exports.getDotRelativeURL = () => new URL('.', import.meta.url)
exports.getDotRelativePathname = () => new URL('.', import.meta.url).pathname
