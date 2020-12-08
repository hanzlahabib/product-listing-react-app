import '@testing-library/jest-dom'
import * as React from 'react'
import {render, cleanup} from '@testing-library/react'
import CardContainer from './CardsContainer'

afterAll(() =>{
    cleanup()
})
let wrapper 
beforeEach(() =>{
    let products = [{
        name: 'Test name',
        price: 10,
        description: 'Test Should fail'
    }]
    wrapper = render(<CardContainer products={products}></CardContainer>)
})

test('Check if products are being rendered correctly', () => {
    expect(wrapper.queryByText('Test name')).toBeDefined()
    expect(wrapper.queryByText('10$')).toBeDefined()
    expect(wrapper.queryByText('test description')).toBeNull()
  })

  test('Check if valid numbers of posts are being rendered', () => {
    let products = [{name: '1 product'},{name: '2 product'},{name: '3 product'},{name: '4 product'}]
    let wrapperSecond = render(<CardContainer products={products}></CardContainer>)
    expect(wrapperSecond.queryByText('Test nameAS')).toBeDefined()
    expect(wrapperSecond.queryByText('10$ASD')).toBeDefined()
    expect(wrapperSecond.queryByText('test descriptionASD')).toBeNull()
  })

  