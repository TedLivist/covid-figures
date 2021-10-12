import { fetchRegions, resolveRegions } from "../../helpers.js/fetchRegions";
import { formatDate } from "../../helpers.js/formatDate";

const GET_REGIONS = 'covidFigures/countries/GET_REGIONS';

const initialState = []

export const getRegions = (payload) => async (dispatch) => {
  const date = formatDate()
  
  const data = await fetchRegions(date, payload)
  const { regions, name, totalCases } = resolveRegions(data, date)
  dispatch({
    type: GET_REGIONS,
    regions,
    name,
    totalCases,
  })
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_REGIONS:
      return {
        ...state,
        regions: action.regions,
        name: action.name,
        totalCases: action.totalCases
      }
    default:
      return state
  }
}

export default reducer;
