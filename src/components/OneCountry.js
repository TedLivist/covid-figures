import React from 'react';
import { NavLink } from 'react-router-dom';

const OneCountry = (props) => {

  const { id, name, deaths } = props

  return (
    <div>
      <NavLink to={`/${id}`}>
        <div>name: {name}</div>
        <div>cases: {deaths}</div>
      </NavLink>
    </div>
  );
}
 
export default OneCountry;