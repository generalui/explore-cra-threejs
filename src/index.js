import React from 'react'
import ReactDOM from 'react-dom'
import ThreeDemo from './components/ThreeDemo/ThreeDemo'
import ThreeDemoWithHooks from './components/ThreeDemo/ThreeDemoWithHooks'

ReactDOM.render(<ThreeDemoWithHooks />, document.getElementById('fc'))
ReactDOM.render(<ThreeDemo />, document.getElementById('root'))
