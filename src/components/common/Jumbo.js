import React from 'react';

const Jumbo = (props) => {
  const { name, cases } = props
  
  return (
    <div>
      <p>Jumbo</p>
      <p>{name}</p>
      <p>{cases}</p>
    </div>
  );
}
 
export default Jumbo;