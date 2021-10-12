import React from 'react';
import 'boxicons';

const Header = (props) => {
  const { year, title } = props
  return (
    <div className="d-flex">
      <div><box-icon type='solid' name='chevron-left'></box-icon></div>
      <p>{year}</p>
      <div>{title}</div>
      <div><box-icon name='microphone'></box-icon></div>
      <div><box-icon name='cog'></box-icon></div>
    </div>
  );
}
 
export default Header;