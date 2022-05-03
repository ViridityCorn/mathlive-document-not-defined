## Steps to reproduce (and steps taking in this project)
- Create new project using `npx create-next-app@latest`
	- Press `y` when asked to install the package
	- Provide name for project
- Replace default `index.js` with new `index.js` containing a simple component returning only a div.
- Install MathLive using `npm install --save mathlive`
- Add `import { MathLiveComponent } from "mathlive";` at the top of `index.js`