import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../redux/countries/countries';
import Jumbo from './Jumbo';
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

  return (
    <div>
      <p>Haha Countries</p>
      <Jumbo name={'Countries'} cases={countriesTotal} />
      {countries.map((country) => (
        <OneCountry key={country.id} id={country.id} name={country.country} deaths={country.confirmedCases} />
      ))}
    </div>
  );
}
 
export default Countries;