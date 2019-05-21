import React from 'react'
import SceneManager from '../../lib/SceneManager'
import CameraControls from './CameraControls'
import { getCamera, getRenderer, getScene } from './threeSetup'

import ConcreteBarricade03 from './ConcreteBarricade03'

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
      <ConcreteBarricade03 />
    </SceneManager>
  )
}

export default GLTFExample
