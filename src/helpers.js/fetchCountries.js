export const fetchCountries = async (date) => {
  const response = await fetch(`https://api.covid19tracking.narrativa.com/api/${date}`)
  return response.json()
}

export const resolveCountries = (response, date) => {
  const countryKeys = response.dates[date].countries

  const obj = Object.entries(countryKeys)
  const mainArr = []

  obj.map(([country, value]) => {
    for (let item of cont) {
      if (item === country) {
        const id = value.id
        const confirmedCases = value.today_confirmed
        mainArr.push({id, country, confirmedCases})
      }
    }
  })

  return mainArr
}

const cont = [
  'Spain',
  'Italy',
  'Germany',
  'United Kingdom',
  'France',
  'Netherlands',
  'Belgium',
  'Portugal',
  'Switzerland',
  'Denmark',
]
// const newObj = {}


// const data = await getVirus(latestDate)
// const mainData = breakDown(data)