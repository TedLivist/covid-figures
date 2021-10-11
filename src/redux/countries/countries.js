import { resolveCountries, fetchCountries } from "../../helpers.js/fetchCountries";

const GET_COUNTRIES = 'covidFigures/countries/GET_COUNTRIES';

const initialState = []

export const getCountries = () => async (dispatch) => {
  let date = new Date()
  let toLocale = date.toLocaleDateString()
  const newArr = toLocale.split('/')
  let nextDate = []
  nextDate[0] = newArr[2]
  nextDate[1] = newArr[0]
  nextDate[2] = newArr[1] - 1
  const latestDate = nextDate.join('-')

  const data = await fetchCountries(latestDate)
  const countries = resolveCountries(data, latestDate)
  dispatch({
    type: GET_COUNTRIES,
    countries
  })
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_COUNTRIES:
      return {
        countries: action.countries,
        ...state
      }
    default:
      return state
  }
}

export default reducer