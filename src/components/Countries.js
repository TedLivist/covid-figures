import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../redux/countries/countries';
import Header from './common/Header';
import Jumbo from './common/Jumbo';
import Topic from './common/Topic';
import OneCountry from './OneCountry';

const Countries = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

  const { countries, countriesTotal } = useSelector((state) => state.countriesReducer)
  const [countryState, setCountryState] = useState(countries)
  const [countryName, setCountryName] = useState('')
  useEffect(() => {
    setCountryState(countries)
  }, [countries])

  console.log(countryState)
  const onChange = (e) => {
    let value = e.target.value
    let finalValue = ''
    if (value.length > 0) {
      finalValue = `${value[0].toUpperCase()}` + `${value.slice(1, value.length)}`
      setCountryName(finalValue)
      const newList = countries.filter((country) => country.country.includes(finalValue))
      setCountryState(newList)
    } else {
      finalValue = ''
      setCountryName(finalValue)
      setCountryState(countries)
    }
  }

  let num = 0

  return (
    <div>
      <Header year={'2021'} title={'countries cases'} />
      <Jumbo name={'Countries'} cases={countriesTotal} />
      <div className="topic-input d-flex">
        <Topic topic={'CASES BY COUNTRY'} />
        <div className="search-input pe-3">
          <input type="text" placeholder="Search movie" onChange={onChange} value={countryName} />
        </div>
      </div>
      <div className="countries-container">
        {countryState && countryState.map((country) => (
          <OneCountry num={num + 1 > 4 ? num = 1 : num += 1} key={country.id} id={country.id} name={country.country} deaths={country.confirmedCases} />
        ))}
      </div>
    </div>
  );
}
 
export default Countries;