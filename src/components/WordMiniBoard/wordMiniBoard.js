import React from 'react';
import './wordMiniBoard.css';

function WordMiniBoard({values}) {
  let frame = [];

  for (let i = 0; i < 15; i++)
    frame.push(<div key={i}>{values[i]}</div>);
  
  return(
    <div className="wordBoard_miniBoard">
      {frame}
    </div>
  )
}

export default WordMiniBoard;