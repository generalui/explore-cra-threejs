import * as THREE from 'three'

export const initScene = () => {
  return new THREE.Scene()
}

export const initCamera = () => {
  return new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
}

export const initRenderer = (window, context) => {
  const renderer = new THREE.WebGLRenderer({ antialias: true, context })
  renderer.setSize(window.innerWidth, window.innerHeight)
  return renderer
}