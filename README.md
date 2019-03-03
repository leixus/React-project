
## 2019-3-3

### 生命周期的使用场景



## 2019-2-28

## 虚拟Dmo

state 数据
JSX 模板
数据 + 模板 生成真实的DOM
state 发生改变
数据 + 模板 生成真实的DOM，替换原始的DOM

### 缺陷

非常耗性能

1、数据 + 模板 生成真实的DOM    （损耗性能）
<div id='abc'><span>Hello World</span></div>
2、生成虚拟Dom(虚拟Dom是一个JS对象)
[div， {id: 'abc'}, [span, {}, 'Hello World']]
3、修改state
4、生成新的虚拟Dom          （提升了性能）
[div， {id: 'abc'}, [span, {}, 'bye bye']]
5、虚拟Dom进行对比，找出差异
6、直接操作Dom，改变内容

## 2019-3-1

### 深入了解虚拟Dom

1、state 数据
2、JSX 模板
3、数据 + 模板 生成虚拟Dom（js对象）
4、使用虚拟Dom生成真实的DOM
5、state 发生改变
6、生成新的Dom
7、虚拟Dom进行对比
8、直接操作Dom，改变span中的内容

## diff算法


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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
