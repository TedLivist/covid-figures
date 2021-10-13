import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const OneCountry = (props) => {
  const {
    num,
    id,
    name,
    cases,
  } = props;

  return (
    <div className={num === 2 || num === 3 ? 'country-div pb-3 tinted-bg' : 'country-div pb-3 lighter-bg'}>
      <NavLink to={`/${id}`}>
        <span className="country-arrow">
          <box-icon color="#fff" size="1rem" name="right-arrow-circle" />
        </span>
        <div className="country-bx">
          <box-icon color="#7B2C4B" size="6rem" name="world" />
        </div>
        <div className="country-text me-2">
          <div className="country-name">{name}</div>
          <div className="country-sub-cases">{cases}</div>
        </div>
      </NavLink>
    </div>
  );
};

OneCountry.propTypes = {
  num: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cases: PropTypes.number.isRequired,
};

export default OneCountry;
