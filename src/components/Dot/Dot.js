import React from 'react';
import { browserHistory } from 'react-router';

const Dot = ({ name, index, dotPos, moveDots, unHover }) =>  {

  function dotHover(){
    moveDots(index, name);
  }

  const style = {
    left:dotPos[index][0],
    top:dotPos[index][1]
  }

  return (
    <div
      className={`project__dot project__dot--${name}`}
      style={style}
      onMouseEnter={() => dotHover()}
      onMouseLeave={() => unHover()}
      onClick={() => browserHistory.push('/project/dfaskjfd')}
    >
    </div>
  );
}

export default Dot;
