import React from 'react';

const OneRegion = (props) => {
  const { name, cases, num } = props
  return (
    <div className={num % 2 === 0 ? "one-region d-flex region-even" : "one-region d-flex region-odd"}>
      <div>{name}</div>
      <div className="d-flex">
        <div>{cases}</div>
        <div className="bx-icon-2">
          <box-icon color="#fff" size="1rem" name='right-arrow-circle'></box-icon>
        </div>
      </div>
    </div>
  );
}
 
export default OneRegion;