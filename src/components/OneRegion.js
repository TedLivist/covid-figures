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
  name: PropTypes.string,
  cases: PropTypes.number,
  num: PropTypes.number,
};

OneRegion.defaultProps = {
  num: 0,
  cases: 0,
  name: '',
};

export default OneRegion;
