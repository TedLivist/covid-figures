import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCountries } from '../redux/countries/countries';
import NewComp from './NewComp';

const Countries = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])
  return (
    <div>
      <p>Haha Countries</p>
      <NewComp />
    </div>
  );
}
 
export default Countries;