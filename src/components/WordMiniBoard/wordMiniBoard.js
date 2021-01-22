import React from 'react';
import './wordMiniBoard.css';

function WordMiniBoard({values}) {
  let frame = [];

  var randomColor = Math.floor(Math.random()*16777215).toString(16);

  for (let i = 0; i < 15; i++)
  {

    if (values[i] != null && values[i] === values[i].toUpperCase())
      frame.push(<div style= {{color: "#" + randomColor}} key={i}>{values[i].toLowerCase()}</div>);

    else
      frame.push(<div key={i}>{values[i]}</div>);
  }

  
  return(
    <div className="wordBoard_miniBoard">
      {frame}
    </div>
  )
}

export default WordMiniBoard;