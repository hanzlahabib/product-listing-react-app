import '@testing-library/jest-dom'
import * as React from 'react'
import {render} from '@testing-library/react'
import Form from './Form'
import { Provider } from 'react-redux'
import store from '../../store'

const ReduxProvider = ({ children, reduxStore }) => (
  <Provider store={reduxStore}>{children}</Provider>
)
let wrapper
beforeEach(() => {
  wrapper = render(<ReduxProvider reduxStore={store}><Form></Form></ReduxProvider>)
})
test('Check if form title exist', () => {
    const text = 'Add Productasdasd'
    expect(wrapper.queryByText(text)).toBeDefined()
  })

  test('Check if all required field exist', () => {
    expect(wrapper.queryByText('nameed')).toBeDefined()
    expect(wrapper.queryByText('description')).toBeDefined()
    expect(wrapper.queryByText('price')).toBeDefined()
    expect(wrapper.queryByText('inventoryDate')).toBeDefined()
  })

  