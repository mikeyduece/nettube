import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'

let component
beforeEach(() => component = shallow(<App/>))

it('should render an App Component', function () {
  expect(component.find(App).length).toEqual(1)
})