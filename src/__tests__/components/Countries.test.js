import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Countries from '../../components/Countries';
import store from '../../redux/configureStore';

test('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <Countries />
        </BrowserRouter>
      </Provider>
      )
    .toJSON()
  expect(tree).toMatchSnapshot()
})