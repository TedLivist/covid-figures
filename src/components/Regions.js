import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRegions } from '../redux/regions/regions';
import Header from './common/Header';
import Jumbo from './common/Jumbo';
import Topic from './common/Topic';
import OneRegion from './OneRegion';

const Regions = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  let num = 0

  useEffect(() => {
    dispatch(getRegions(id))
  }, [dispatch, id])

  const { regions, name, totalCases } = useSelector((state) => state.regionsReducer)

  if (!regions) {
    return null
  }

  return (
    <div>
      <Header title={'cases by region'} />
      <Jumbo name={name} cases={totalCases} />
      <Topic topic={'CASES BY REGION - 2021'} />
      <ul>
        {regions.map((region) => (
          <li key={region.id}>
            <OneRegion num={num += 1} name={region.name} cases={region.totalCases} />
          </li>
        ))}
      </ul>
    </div>
  );
}
 
export default Regions;