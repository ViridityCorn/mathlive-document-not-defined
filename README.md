# Testcase of "Document is not defined"-error using MathLive and NextJs
## The Error
This is the error provided.

```
Server Error

ReferenceError: document is not defined

This error happened while generating the page. Any console logs will be displayed in the terminal window.

Call Stack

<unknown>

file:/D:/Development/mathlive-document-not-defined/node_modules/mathlive/dist/mathlive.min.js (2:920275)

<unknown>

file:/D:/Development/mathlive-document-not-defined/node_modules/mathlive/dist/mathlive.min.js (2:69)

Object.<anonymous>

file:/D:/Development/mathlive-document-not-defined/node_modules/mathlive/dist/mathlive.min.js (2:209)

Module._compile
node:internal/modules/cjs/loader (1099:14)

Object.Module._extensions..js
node:internal/modules/cjs/loader (1153:10)

Module.load
node:internal/modules/cjs/loader (975:32)

Function.Module._load
node:internal/modules/cjs/loader (822:12)

Module.require
node:internal/modules/cjs/loader (999:19)

require
node:internal/modules/cjs/helpers (102:18)

Object.mathlive
file:/D:/Development/mathlive-document-not-defined/.next/server/pages/index.js (32:18)
```

## Steps taken to produce this project (and to reproduce the error from scratch)
- Create new project using `npx create-next-app@latest`
	- Press `y` when asked to install the package
	- Provide name for project
- Replace default `index.js` with new `index.js` containing a simple component returning only a div.
- Install MathLive using `npm install --save mathlive`
- Add `import { MathLiveComponent } from "mathlive";` at the top of `index.js`
- The NextJs server can be started using `npm run dev` and the error will occur.
### To reproduce the error on your machine after cloning the project
- Run `npm install`
- Run `npm run dev`
## Test machine
- This error was observed on a Windows 11 machine.
- The code is written in Visual Studio Code.
- The website was tested in Firefox Developer Edition.
- The used NextJs version is 12.1.6.
- The used version of React and ReactDom is 18.1.0.

## More information necessary
If more information is necessary, please contact the me [here](https://gitter.im/cortex-js/community) or by creating an issue in this repository.

# Testcase for NextJS and MathLive css error
This same repo can be used for recreating a different error.
When using either [React-MathLive](https://github.com/concludio/react-mathlive) or [React-MathLive-View](https://github.com/arnog/react-mathlive) the following error occurs:

```
Failed to compile

./node_modules/mathlive/dist/mathlive-fonts.css
Global CSS cannot be imported from within node_modules.
Read more: https://nextjs.org/docs/messages/css-npm
Location: node_modules\react-math-view\dist\index.modern.js

This error occurred during the build process and can only be dismissed by fixing the error.
```
## To reproduce
- After cloning the repository, run `npm install`
- Rename the current `index.js` to something else, and rename `index-react.js` to `index.js`
- Run `npm run dev`