import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../redux/countries/countries';
import OneCountry from './OneCountry';

const Countries = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

  const countriesList = useSelector((state) => state.countriesReducer.countries)

  if (!countriesList) {
    return null
  }

  return (
    <div>
      <p>Haha Countries</p>
      {countriesList.map((country) => (
        <OneCountry key={country.id} id={country.id} name={country.country} deaths={country.totalDeaths} />
      ))}
    </div>
  );
}
 
export default Countries;