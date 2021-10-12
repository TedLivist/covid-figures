import React from 'react';
import renderer from 'react-test-renderer';
import OneRegion from '../../components/OneRegion';

test('renders correctly', () => {
  const tree = renderer
    .create(<OneRegion />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})