import React from 'react'
import renderer from 'react-test-renderer'

import App from './App'

it('App renders correctly', () => {
  expect(renderer.create(<App />)).toMatchSnapshot()
})
