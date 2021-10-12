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
      <p>{name}</p>
      <p>{totalCases}</p>
      <div>
        {regions.map((region) => {
          return <OneRegion key={region.id} name={region.name} cases={region.totalCases} />
        })}
      </div>
    </div>
  );
}
 
export default Regions;