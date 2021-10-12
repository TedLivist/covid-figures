import React from 'react';

const Header = (props) => {
  const { year, title } = props
  return (
    <div>
      <div>back</div>
      <p>{year}</p>
      <div>{title}</div>
      <div>Micro</div>
      <div>Settings</div>
    </div>
  );
}
 
export default Header;