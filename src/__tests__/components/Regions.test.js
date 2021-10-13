import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Regions from '../../components/Regions';
import store from '../../redux/configureStore';

test('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <Regions />
        </BrowserRouter>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
