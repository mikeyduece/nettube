import React from 'react'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer';
import App from '../App'
import Root from '../../../Root'

it('should render the App component without crashing', function () {
  const component = renderer.create(
    shallow(
      <Root>
        <App/>
      </Root>
    )
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
