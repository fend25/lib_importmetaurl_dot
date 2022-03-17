export const getDotRelativeURL = () => new URL('.', import.meta.url)
export const getDotRelativePathname = () => new URL('.', import.meta.url).pathname
