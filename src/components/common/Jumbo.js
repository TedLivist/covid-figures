import React from 'react';
import world from '../../images/undraw_world.svg';

const Jumbo = (props) => {
  const { name, cases } = props
  
  return (
    <div className="jumbo d-flex">
      <div className="icon-div w-50">
        <box-icon color="#7B2C4B" size="6rem" name='world'></box-icon>
      </div>
      <div className="w-50 jumbo-title">
        <div>{name}</div>
        <div>{cases}</div>
      </div>
    </div>
  );
}
 
export default Jumbo;