import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import CubeExample from '../../examples/cube/CubeExample'
// import GLTFExample from '../../examples/load-gltf/GLTFExample'

export default () => {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <h2>CRA three.js examples</h2>
              <div>
                <Link to="/cube">Cube</Link>
              </div>
              <div>
                <Link to="/gltf">GLTF 3D model</Link>
              </div>
            </div>
          )}
        />
        <Route path="/cube" component={CubeExample} />
        {/* <Route path="/gltf" component={GLTFExample} /> */}
      </div>
    </Router>
  )
}
