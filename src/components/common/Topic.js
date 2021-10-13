import React from 'react';
import PropTypes from 'prop-types';

const Topic = (props) => {
  const { topic } = props;

  return (
    <div className="topic-div">
      <div>{topic}</div>
    </div>
  );
};

Topic.propTypes = {
  topic: PropTypes.string,
};

Topic.defaultProps = {
  topic: '',
};

export default Topic;
