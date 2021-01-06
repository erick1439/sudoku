import React from 'react';
import './wordMiniBoard.css';

function WordMiniBoard({values}) {
  let frame = [];

  for (let i = 0; i < 9; i++)
  {
    frame.push(<div key={i} className="board_miniBoard-number">{values[i]}</div>);
  }

  return(
    <div className="board_miniBoard">
      {frame}
    </div>
  )
}

export default WordMiniBoard;