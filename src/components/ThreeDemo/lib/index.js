import * as THREE from 'three'

/*
  Initialization
*/
export const initScene = () => {
  return new THREE.Scene()
}

export const initCamera = () => {
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  camera.position.z = 2

  return camera
}

export const initRenderer = (window, context) => {
  const renderer = new THREE.WebGLRenderer({ antialias: true, context })
  renderer.setSize(window.innerWidth, window.innerHeight)
  return renderer
}

export const initDirectionalLight = () => {
  const directionalLight = new THREE.DirectionalLight(0x9090aa)
  directionalLight.position.set(-10, 10, -10).normalize()
  return directionalLight
}

export const initHemisphereLight = () => {
  const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444)
  hemisphereLight.position.set(1, 1, 1)
  return hemisphereLight
}

export const initCube = () => {
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshStandardMaterial({
    color: 0x00ff00,
    metalness: 0.15,
  })

  return new THREE.Mesh(geometry, material)
}