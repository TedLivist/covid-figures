import React from 'react';
import PropTypes from 'prop-types';

const Jumbo = (props) => {
  const { name, cases } = props;

  return (
    <div className="jumbo d-flex">
      <div className="icon-div w-50">
        {name === 'Countries'
          ? <box-icon color="#7B2C4B" size="8rem" name="world" />
          : <box-icon color="#7B2C4B" size="8rem" name="map" />}
      </div>
      <div className="w-50 jumbo-title">
        <div>{name}</div>
        <div>{cases}</div>
      </div>
    </div>
  );
};

Jumbo.propTypes = {
  name: PropTypes.string,
  cases: PropTypes.number,
};

Jumbo.defaultProps = {
  cases: 0,
  name: '',
};

export default Jumbo;
