import React, { useEffect } from 'react';
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

  if (!countries) {
    return null
  }

  let num = 0

  return (
    <div>
      <Header year={'2021'} title={'countries cases'} />
      <Jumbo name={'Countries'} cases={countriesTotal} />
      <Topic topic={'CASES BY COUNTRY'} />
      <div className="countries-container">
        {countries.map((country) => (
          <OneCountry num={num + 1 > 4 ? num = 1 : num += 1} key={country.id} id={country.id} name={country.country} deaths={country.confirmedCases} />
        ))}
      </div>
    </div>
  );
}
 
export default Countries;