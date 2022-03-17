# Example lib for `new URL('.', import.meta.url)`

Some bundlers are failing when processing `new URL('.', import.meta.url)` expression in a lib from `node_modules`.

This lib is just an example lib and simple provider of `new URL('.', import.meta.url)` related export.

Actually it exports just two functions:

```js
import {getDotRelativeURL, getDotRelativePathname} from 'lib_importmetaurl_dot_example'
```

And it's code completely describes itself:

```js
export const getDotRelativeURL = () => new URL('.', import.meta.url)
export const getDotRelativePathname = () => new URL('.', import.meta.url).pathname
```
