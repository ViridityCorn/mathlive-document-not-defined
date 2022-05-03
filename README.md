# Testcase of "Document is not defined"-error using MathLive and NextJs
## The Error
This is the error provided.
------
**Server Error**

ReferenceError: document is not defined

*This error happened while generating the page. Any console logs will be displayed in the terminal window.*

Call Stack

\<unknown>

file:/D:/Development/mathlive-document-not-defined/node_modules/mathlive/dist/mathlive.min.js (2:920275)

\<unknown>

file:/D:/Development/mathlive-document-not-defined/node_modules/mathlive/dist/mathlive.min.js (2:69)

Object.\<anonymous>

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

------

## Steps to reproduce (and steps taking in this project)
- Create new project using `npx create-next-app@latest`
	- Press `y` when asked to install the package
	- Provide name for project
- Replace default `index.js` with new `index.js` containing a simple component returning only a div.
- Install MathLive using `npm install --save mathlive`
- Add `import { MathLiveComponent } from "mathlive";` at the top of `index.js`