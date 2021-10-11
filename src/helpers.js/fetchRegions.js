export const fetchRegions = async (date, id) => {
  const response = await fetch(`https://api.covid19tracking.narrativa.com/api/${date}/country/${id}`)
  return response.json()
}

export const resolveRegions = (response, date) => {
  const key = Object.keys(response.dates[date].countries)
  const initialRegions = response.dates[date].countries[key].regions
  const regions = initialRegions.map((region) => {
    return {id: region.id, name: region.name, totalCases: region.today_confirmed}
  })

  return { regions, name: key }
}