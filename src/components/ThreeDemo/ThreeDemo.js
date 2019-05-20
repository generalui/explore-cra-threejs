import React from 'react'
import * as lib from './lib/index'

export default class ThreeDemo extends React.Component {
  /**
   * Rendering
   */
  render() {
    return (
      <div
        className="three"
        ref={el => {
          this.three = el
        }}
      />
    )
  }

  /**
   * Initialization
   */
  componentDidMount() {
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions.bind(this))

    // Setup empty scene, camera, and renderer
    this.scene = lib.initScene()
    this.camera = lib.initCamera()
    this.renderer = lib.initRenderer(window)
    this.three.appendChild(this.renderer.domElement)

    // Add lighting
    this.scene.add(lib.initDirectionalLight())
    this.scene.add(lib.initHemisphereLight())

    // Add cube to our scene and animate
    this.cube = lib.initCube()
    this.scene.add(this.cube)
    this.animate()
  }

  /**
   * Animation loop
   */
  animate() {
    requestAnimationFrame(this.animate.bind(this))

    this.cube.rotation.x += 0.01
    this.cube.rotation.y += 0.01

    this.renderer.render(this.scene, this.camera)
  }

  /**
   * Resize operation handler, updating dimensions.
   * Setting state will invalidate the component
   * and call `componentWillUpdate()`.
   */
  updateDimensions() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  /**
   * Invalidation handler, updating layout
   */
  componentWillUpdate() {
    let width = window.innerWidth
    let height = window.innerHeight

    this.renderer.setSize(width, height)
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
  }

  /**
   * Dispose
   */
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this))
  }
}
