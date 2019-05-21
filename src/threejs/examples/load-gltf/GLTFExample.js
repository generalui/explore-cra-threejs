import React from 'react'
import SceneManager from '../../lib/SceneManager'
import CameraControls from './CameraControls'
import { getCamera, getRenderer, getScene } from './threeSetup'

import Cube from '../cube/Cube'

const GLTFExample = () => {
  return (
    <SceneManager
      getCamera={getCamera}
      getRenderer={getRenderer}
      getScene={getScene}
      canvasStyle={{
        position: 'absolute',
        height: '100%',
        width: '100%',
        zIndex: -1,
      }}
    >
      <CameraControls />
      <Cube />
    </SceneManager>
  )
}

export default GLTFExample
