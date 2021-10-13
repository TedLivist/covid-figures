import formatDate from "../../helpers/formatDate";

describe('formatDate', () => {
  test('gets the correct date', () => {
    const date = new Date().toLocaleDateString().split('/')[1] - 1
    let stringedDate = date.toString()
    const mainDate = formatDate()
    const day = mainDate[mainDate.length - 2] + mainDate[mainDate.length - 1]
    expect(day).toBe(stringedDate)
  })

  test('returns a string', () => {
    const date = formatDate()
    expect(date).toEqual(expect.stringContaining('2021'))
  })
})