import '@testing-library/jest-dom';
import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import Card from './Card';

afterAll(() => {
  cleanup();
});
let wrapper;
beforeEach(() => {
  let product = {
    name: 'Product name here',
    price: 10,
    description: 'Test Should fail',
    inventoryDate: '10-10-2020',
  };
  wrapper = render(<Card product={product}></Card>);
});

test('Check if individual card rendering properly', () => {
  expect(wrapper.queryByText('Product name here')).toBeDefined();
  expect(wrapper.queryByText('10$')).toBeDefined();
  expect(wrapper.queryByText('test description')).toBeNull();
});
