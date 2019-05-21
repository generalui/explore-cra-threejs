import React from 'react'
import { shallow } from 'enzyme'

import useWindowSize from './useWindowSize'

// IMPORTANT: Hooks cannot be tested directly as JavaScript; they must exist inside a functional component
const HookWrapper = props => {
  const hook = props.hook ? props.hook() : undefined
  return <div hook={hook} />
}

describe(`useWindowSize`, () => {
  const mockWindow = { innerWidth: 300, innerHeight: 300 }
  let width, height

  // Initial setup
  beforeAll(() => {
    let wrapper = shallow(
      <HookWrapper hook={() => useWindowSize(mockWindow)} />
    )
    const { hook } = wrapper.find('div').props()
    width = hook.width
    height = hook.height
  })

  describe(`should set an expected`, () => {
    it(`width`, () => {
      expect(width).toEqual(mockWindow.innerWidth)
    })
    it(`height`, () => {
      expect(height).toEqual(mockWindow.innerWidth)
    })
  })
})
