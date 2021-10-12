import React from 'react';
import renderer from 'react-test-renderer'
import Jumbo from '../../components/common/Jumbo';

test('renders correctly', () => {
  const tree = renderer
    .create(<Jumbo />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
