import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import CubeExample from '../../examples/cube/CubeExample'

export default () => {
  return (
    <Router>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Route
        exact
        path="/"
        render={() => (
          <div>
            <h2>Examples:</h2>
            <div>
              <Link to="/cube">Cube</Link>
            </div>
          </div>
        )}
      />
      <Route path="/cube" component={CubeExample} />
    </div>
  </Router>
  )
}
