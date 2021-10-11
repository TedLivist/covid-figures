import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRegions } from '../redux/regions/regions';

const Regions = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  useEffect(() => {
    dispatch(getRegions(id))
  })
  
  return (
    <div>{id} Regions</div>
  );
}
 
export default Regions;