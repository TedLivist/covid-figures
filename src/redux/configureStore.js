import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import countriesReducer from './countries/countries';
import regionsReducer from './regions/regions';

const middleware = [logger, thunk];

const reducer = combineReducers({
  countriesReducer,
  regionsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(...middleware),
);

export default store;
