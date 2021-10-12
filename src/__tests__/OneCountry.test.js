import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import OneCountry from '../components/OneCountry';

test('renders correctly', () => {
  const tree = renderer
    .create(
    <BrowserRouter>
      <OneCountry />
    </BrowserRouter>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
