import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useEffect } from 'react'
import { useThree } from '../../lib/SceneManager'

const ConcreteBarricade03 = props => {

  const setup = context => {
    const { scene } = context

    // Load our 3D model
    const model = new GLTFLoader()
    // IMPORTANT: All models must exist in the public folder or you will be disappointed 😁
    const modelURL = 'models/concrete_barricade_03/scene.gltf'
    const modelIsLoading = (xhr) => {
      const percentLoaded = (xhr.loaded / xhr.total * 100)
      if (percentLoaded === Infinity) return
      console.log(`${percentLoaded} % loaded`)
    }
    const modelHasLoaded = (gltf) => {
      const exampleModel = gltf.scene

      // Specify initial rotation of object
      exampleModel.rotation.x -= 0.6
      exampleModel.rotation.y -= 0.1
      exampleModel.rotation.z += 0.8

      // Add our model to the scene
      scene.add(exampleModel)
      return model
    }
    const modelHasLoadedWithAnError = (error) => {
      console.error(`ERROR loading model at ${modelURL} - ${error}`)
    }

    // Load a glTF resource
    model.load(
      // Model URL
      modelURL,

      // Function invoked when the resource is loaded
      modelHasLoaded,

      // Function invoked while loading is progressing
      modelIsLoading,

      // Function invoked when loading has errors
      modelHasLoadedWithAnError
    )
  }

  useThree(setup)

  return null
}

export default ConcreteBarricade03
