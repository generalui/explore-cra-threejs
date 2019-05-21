# Welcome

This project is intended to serve as a starting point to explore working with [three.js](https://threejs.org/) and [Create React App](https://github.com/facebook/create-react-app).

Some key features of this repo include

+ Demonstrating how to use React to wrap a vanilla JS library
+ Usage of [React Hooks](https://reactjs.org/docs/hooks-intro.html) starting from a [create-react-app](https://github.com/facebook/create-react-app) project
  - A custom `useWindowSize` hook was created to demonstrate creating a custom hook **AND** how to test against it
+ A `ReferenceDemo` component which contains a library to generate individual assets for the three.js demo
  - Sample tests were written in `src/threejs/components/ReferenceDemo/lib/index.test.js` demonstrating how you can programatically test WebGL in a headless environment

![screencasts/demo.gif](screencasts/demo.gif)

The original ThreeDemo code was based on [https://github.com/jasonsturges/threejs-react-example](https://github.com/jasonsturges/threejs-react-example)

Special thanks to [@aarosil](https://github.com/aarosil) for not only creating [react-three-hook](https://github.com/aarosil/react-three-hook) but more importantly including detailed documentation and concepts that helped solidify some advanced concepts in a very succinct and easy to digest manner.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
