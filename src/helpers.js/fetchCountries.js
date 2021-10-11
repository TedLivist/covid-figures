export const getVirus = async (date) => {
  const response = await fetch(`https://api.covid19tracking.narrativa.com/api/${date}`)
  return response.json()
}

export const breakDown = (someData, date) => {
  const newStuff = someData.dates[date].countries

  const obj = Object.entries(newStuff)
  const mainArr = []

  obj.map(([country, value]) => {
    for (let item of cont) {
      if (item === country) {
        const confirmedCases = value.today_confirmed
        mainArr.push({country, confirmedCases})
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