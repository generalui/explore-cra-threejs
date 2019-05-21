import React from 'react'
import { shallow } from 'enzyme'
import ThreeDemoWithHooks from './ThreeDemoWithHooks'

describe(`ThreeDemoWithHooks`, () => {
  let wrapper

  beforeAll(() => {
    wrapper = shallow(<ThreeDemoWithHooks />)
  })

  it(`should render`, () => {
    expect(wrapper).toBeTruthy()
  })
})