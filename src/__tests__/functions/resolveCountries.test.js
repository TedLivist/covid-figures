import { resolveCountries } from "../../helpers/fetchCountries";
import formatDate from '../../helpers/formatDate'

describe('Resolve Countries', () => {
  let date = ''
  let data = {}

  beforeEach(() => {
    date = formatDate()
    data = {
      dates: {
        [date]: {
          countries: {
            Spain: {
              id: 'spain',
              today_confirmed: 2300,
            },
            Portugal: {
              id: 'portugal',
              today_confirmed: 100
            }
          }
        }
      }
    }
  })

  test('returns an array of objects', () => {
    const resolve = resolveCountries(data, date)
    expect(resolve.mainArr[0]).toEqual(expect.objectContaining({id: 'spain'}))
  })

  test('returns total cases', () => {
    const resolve = resolveCountries(data, date)
    expect(resolve.num).toBeGreaterThan(2000)
  })
})
