import React from 'react';
import renderer from 'react-test-renderer';
import Topic from '../components/common/Topic';

it ('renders correctly', () => {
  const tree = renderer
    .create(<Topic />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})