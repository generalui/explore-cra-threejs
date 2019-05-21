import React from 'react'
import { shallow } from 'enzyme'
import ReferenceDemoWithHooks from './ReferenceDemoWithHooks'

describe(`ReferenceDemoWithHooks`, () => {
  let wrapper

  beforeAll(() => {
    wrapper = shallow(<ReferenceDemoWithHooks />)
  })

  it(`should render`, () => {
    expect(wrapper).toBeTruthy()
  })
})