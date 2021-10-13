const formatDate = () => {
  let date = new Date()
  let toLocale = date.toLocaleDateString()
  const newArr = toLocale.split('/')
  let nextDate = []
  nextDate[0] = newArr[2]
  nextDate[1] = newArr[0]
  if (date.getHours() < 14) {
    // fetch information for previous date
    nextDate[2] = newArr[1] - 1
  } else {
    // fetch information for current date
    nextDate[2] = newArr[1]
  }
  const latestDate = nextDate.join('-')

  return latestDate
}

export default formatDate