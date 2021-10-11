export const fetchRegions = async (date, id) => {
  const response = await fetch(`https://api.covid19tracking.narrativa.com/api/${date}/country/${id}`)
  return response.json()
}

export const resolveRegions = (response, date) => {
  const key = Object.keys(response.dates[date].countries)
  return response.dates[date].countries[key].regions
}