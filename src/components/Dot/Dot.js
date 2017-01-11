import React from 'react';
import { browserHistory } from 'react-router';

const Dot = ({ name, index, dotPos, moveDots, unHover }) =>  {

  function dotHover(){
    moveDots(index, name);
  }

  const pos = {transform: `translate(calc(10vw * ${dotPos[index][0]}), calc(9.5vh * ${dotPos[index][1]}))`};

  return (
    <div
      className={`project__dot project__dot--${name}`}
      style={pos}
      onMouseEnter={() => dotHover()}
      onMouseLeave={() => unHover()}
      onClick={() => browserHistory.push(`/project/${name}`)}
    >
    </div>
  );
}

export default Dot;
