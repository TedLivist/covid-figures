import React from 'react';
import 'boxicons';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { year, title } = props
  return (
    <div className="d-flex header px-2 py-2">
      <div className="d-flex">
        <Link to="/">
        <box-icon color="white" type='solid' name='chevron-left'></box-icon>
        </Link>
        <div className="text-white">{year}</div>
      </div>
      <div className="text-white">{title}</div>
      <div className="d-flex">
        <div className="me-4"><box-icon color="white" name='microphone'></box-icon></div>
        <div><box-icon color="white" name='cog'></box-icon></div>
      </div>
    </div>
  );
}
 
export default Header;