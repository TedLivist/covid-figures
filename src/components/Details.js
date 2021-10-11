import React from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams()
  
  return (
    <div>{id} Details</div>
  );
}
 
export default Details;