import * as THREE from 'three'

export const getCamera = ({ offsetWidth, offsetHeight }) => {
  /*
    PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )

    fov — Camera frustum vertical field of view.
    aspect — Camera frustum aspect ratio.
    near — Camera frustum near plane.
    far — Camera frustum far plane.
  */
  const camera = new THREE.PerspectiveCamera(
    75,
    offsetWidth / offsetHeight,
    0.1,
    1000
  )
  camera.position.set(10, 150, 10)

  // Set up zoom
  camera.zoom = 130

  return camera
}

export const getRenderer = canvas => {
  const context = canvas.getContext('webgl')
  const renderer = new THREE.WebGLRenderer({
    canvas,
    context,
  })

  renderer.setSize(canvas.offsetWidth, canvas.offsetHeight)
  renderer.setPixelRatio(window.devicePixelRatio)

  return renderer
}

export const getScene = () => {
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0xcccccc)

  const light = new THREE.SpotLight(0xffffff, 1, 750, 1)
  light.position.set(50, 200, 0)
  light.rotation.z = (90 * Math.PI) / 180
  scene.add(light)

  return scene
}
