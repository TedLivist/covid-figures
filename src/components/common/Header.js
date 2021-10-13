import React from 'react';
import PropTypes from 'prop-types';
import 'boxicons';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { year, title } = props;

  return (
    <div className="d-flex fixed-top header px-2 py-2">
      <div className="d-flex">
        <Link to="/">
          <box-icon color="white" type="solid" name="chevron-left" />
        </Link>
        <div className="text-white">{year}</div>
      </div>
      <div className="text-white">{title}</div>
      <div className="d-flex">
        <div className="me-4">
          <box-icon color="white" name="microphone" />
        </div>
        <div>
          <box-icon color="white" name="cog" />
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  year: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Header.defaultProps = {
  year: '',
};

export default Header;
