import React from 'react';

const Topic = (props) => {
  
  const { topic } = props
  
  return (
    <div className="topic-div">
      <p>{topic}</p>
    </div>
  );
}
 
export default Topic;