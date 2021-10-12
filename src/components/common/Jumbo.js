import React from 'react';

const Jumbo = (props) => {
  const { name, cases } = props
  
  return (
    <div className="jumbo d-flex">
      <div className="icon-div w-50">
        <box-icon color="#7B2C4B" size="8rem" name='world'></box-icon>
      </div>
      <div className="w-50 jumbo-title">
        <div>{name}</div>
        <div>{cases}</div>
      </div>
    </div>
  );
}
 
export default Jumbo;