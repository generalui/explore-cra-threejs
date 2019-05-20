import {
  initScene,
  initCamera,
  initRenderer,
  initDirectionalLight,
  initHemisphereLight,
  initCube,
} from './index'

// WebGL setup
const headlessGl = require('gl')
let gl = headlessGl(300, 300, { preserveDrawingBuffer: true })

describe(`ThreeDemo`, () => {
  describe(`initScene`, () => {
    it(`should generate a Scene`, () => {
      const result = initScene()
      const expectedResultType = 'Scene'

      expect(result).toBeTruthy()
      expect(result.type).toEqual(expectedResultType)
    })
  })

  describe(`initCamera`, () => {
    it(`should generate a PerspectiveCamera`, () => {
      const result = initCamera()
      const expectedResultType = 'PerspectiveCamera'

      expect(result).toBeTruthy()
      expect(result.type).toEqual(expectedResultType)
    })
  })

  describe(`initRenderer`, () => {
    it(`should generate a WebGLRenderer`, () => {
      const mockWindow = { innerWidth: 300, innerHeight: 300 }
      const result = initRenderer(mockWindow, gl)

      expect(result).toBeTruthy()
    })
  })

  describe(`initDirectionalLight`, () => {
    it(`should generate DirectionalLight`, () => {
      const result = initDirectionalLight()
      const expectedResultType = 'DirectionalLight'

      expect(result).toBeTruthy()
      expect(result.type).toEqual(expectedResultType)
    })
  })

  describe(`initHemisphereLight`, () => {
    it(`should generate HemisphereLight`, () => {
      const result = initHemisphereLight()
      const expectedResultType = 'HemisphereLight'

      expect(result).toBeTruthy()
      expect(result.type).toEqual(expectedResultType)
    })
  })

  describe(`initCube`, () => {
    it(`should generate a Mesh`, () => {
      const result = initCube()
      const expectedResultType = 'Mesh'

      expect(result).toBeTruthy()
      expect(result.type).toEqual(expectedResultType)
    })
  })
})
