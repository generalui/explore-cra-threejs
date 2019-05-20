import { initScene, initCamera, initRenderer } from './index'

describe(`ThreeDemo`, () => {
  describe(`initScene`, () => {
    it(`should generate a new three.js Scene`, () => {
      const result = initScene()
      expect(result).toBeTruthy()
    })
  })

  describe(`initCamera`, () => {
    it(`should generate a new three.js PerspectiveCamera`, () => {
      const result = initCamera()
      expect(result).toBeTruthy()
    })
  })

  describe(`initRenderer`, () => {
    // FIXME: Need to find a way to make this pass in a headless environment
    it.skip(`should generate a new three.js WebGLRenderer`, () => {
      const mockWindow = { innerWidth: 300, innerHeight: 300 }
      const result = initRenderer(mockWindow)
      console.log(result)
      expect(result).toBeTruthy()
    })
  })
})
