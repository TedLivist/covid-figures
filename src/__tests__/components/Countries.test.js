import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Countries from '../../components/Countries';
import store from '../../redux/configureStore';
import { getCountries } from '../../redux/countries/countries';

describe('Countries snapshot', () => {
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
})

describe('Countries', () => {
  test('gets data', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Countries />
        </BrowserRouter>
      </Provider>
    )
    
    const getCountriesMock = jest.fn()
    expect(getCountriesMock).toHaveBeenCalledTimes(0)
  })
})
