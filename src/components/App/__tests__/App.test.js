import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer';
import App from '../App'

it('should render the App component without crashing', function () {
  const component = renderer.create(
      <App/>
  )
  
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
