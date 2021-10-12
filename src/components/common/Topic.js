import React from 'react';

const Topic = (props) => {
  
  const { topic } = props
  
  return (
    <div className="topic-div">
      <div>{topic}</div>
    </div>
  );
}
 
export default Topic;