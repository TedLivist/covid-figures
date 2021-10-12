import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../../components/common/Header';

test('renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <Header />
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})