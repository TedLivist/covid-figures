import { fetchRegions, resolveRegions } from "../../helpers.js/fetchRegions";

const GET_REGIONS = 'covidFigures/countries/GET_REGIONS';

const initialState = []

export const getRegions = (payload) => async (dispatch) => {
  let date = new Date()
  let toLocale = date.toLocaleDateString()
  const newArr = toLocale.split('/')
  let nextDate = []
  nextDate[0] = newArr[2]
  nextDate[1] = newArr[0]
  nextDate[2] = newArr[1] - 1
  const latestDate = nextDate.join('-')
  
  const data = await fetchRegions(latestDate, payload)
  const { regions, name } = resolveRegions(data, latestDate)
  dispatch({
    type: GET_REGIONS,
    regions,
    name
  })
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_REGIONS:
      return {
        ...state,
        regions: action.regions,
        name: action.name
      }
    default:
      return state
  }
}

export default reducer;
