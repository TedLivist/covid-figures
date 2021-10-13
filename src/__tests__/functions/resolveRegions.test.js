import { resolveRegions } from "../../helpers/fetchRegions";
import formatDate from '../../helpers/formatDate'

describe('resolveRegions Function', () => {
  let date = ''
  let data = {}

  beforeEach(() => {
    date = formatDate()
    data = {
      dates: {
        [date]: {
          countries: {
            Spain: {
              regions: [
                { id: 'albacete', name: 'Albacete', today_confirmed: 1800 },
                { id: 'canarias', name: 'Canarias', today_confirmed: 300 }
              ]
            }
          }
        }
      }
    }
  })

  test('returns an object', () => {
    const response = resolveRegions(data, date)
    expect(typeof response).toBe('object')
  })

  test('returns a regions array', () => {
    const response = resolveRegions(data, date)
    const { regions } = response
    expect(Array.isArray(regions)).toBe(true)
  })

  test('returns the total number of cases', () => {
    const response = resolveRegions(data, date)
    const { totalCases } = response
    expect(totalCases).toBe(2100)
  })
})