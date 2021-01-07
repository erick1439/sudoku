import React from 'react';
import './miniBoard.css';


function MiniBoard({values}) {
  let frame = []; 

  for (let i = 0; i < 9; i++)
  {

    if (values[i] === ".")
      frame.push(<input type="number" key={i} className="board_miniBoard-input"/>);

    else
      frame.push(<div key={i} className="board_miniBoard-number">{values[i]}</div>);
  }

  return(
    <div className="board_miniBoard">
      {frame}
    </div>
  )
}

export default MiniBoard