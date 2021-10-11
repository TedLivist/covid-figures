import React from 'react';
import { Link } from 'react-router-dom';

const NewComp = () => {
  return (
    <div>
      <Link to="/details" >
        New Comp
      </Link>
    </div>
  );
}
 
export default NewComp;