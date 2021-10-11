import React from 'react';

const OneRegion = (props) => {
  const { name, cases } = props
  return (
    <div>
      <p>{name} - {cases}</p>
    </div>
  );
}
 
export default OneRegion;