import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRegions } from '../redux/regions/regions';
import OneRegion from './OneRegion';

const Regions = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  useEffect(() => {
    dispatch(getRegions(id))
  }, [dispatch, id])
  
  const { regions, name } = useSelector((state) => state.regionsReducer)

  if (!regions) {
    return null
  }

  let num = 0

  return (
    <div>
      <p>{id} Regions</p>
      <p>{name}</p>
      <div>
        {regions.map((region) => {
          num += region.totalCases
          console.log(num)
          return <OneRegion key={region.id} name={region.name} cases={region.totalCases} />
        })}
      </div>
    </div>
  );
}
 
export default Regions;