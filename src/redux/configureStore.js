import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import countriesReducer from './countries/countries'

const middleware = [logger, thunk]

const reducer = combineReducers({
  countriesReducer
})

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

export default store;
