import React from 'react'
import ReactDOM from 'react-dom'
// import ThreeDemo from './components/ThreeDemo/ThreeDemo'
import ThreeDemoWithHooks from './components/ThreeDemo/ThreeDemoWithHooks'
import ThreeDemoWithHooksV2 from './threejs/components/App/App'

ReactDOM.render(<ThreeDemoWithHooks />, document.getElementById('three-demo-with-hooks-v1'))
ReactDOM.render(<ThreeDemoWithHooksV2 />, document.getElementById('three-demo-with-hooks-v2'))
// ReactDOM.render(<ThreeDemo />, document.getElementById('three-demo-original'))
