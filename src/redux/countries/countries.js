import { resolveCountries, fetchCountries } from "../../helpers.js/fetchCountries";
import { formatDate } from "../../helpers.js/formatDate";

const GET_COUNTRIES = 'covidFigures/countries/GET_COUNTRIES';

const initialState = []

export const getCountries = () => async (dispatch) => {
  const date = formatDate()
  const data = await fetchCountries(date)
  const { mainArr, num } = resolveCountries(data, date)
  dispatch({
    type: GET_COUNTRIES,
    countries: mainArr,
    num
  })
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_COUNTRIES:
      return {
        countriesTotal: action.num,
        countries: action.countries,
        ...state
      }
    default:
      return state
  }
}

export default reducer