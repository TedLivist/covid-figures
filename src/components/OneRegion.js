import React from 'react';
import PropTypes from 'prop-types';

const OneRegion = (props) => {
  const { name, cases, num } = props;

  return (
    <div className={num % 2 === 0 ? 'one-region d-flex region-even' : 'one-region d-flex region-odd'}>
      <div>{name}</div>
      <div className="d-flex">
        <div>{cases}</div>
        <div className="bx-icon-2">
          <box-icon color="#fff" size="1rem" name="right-arrow-circle" />
        </div>
      </div>
    </div>
  );
};

OneRegion.propTypes = {
  name: PropTypes.string.isRequired,
  cases: PropTypes.number.isRequired,
  num: PropTypes.number.isRequired,
};

export default OneRegion;
