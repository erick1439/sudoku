import React from 'react';
import './wordMiniBoard.css';

function WordMiniBoard({values}) {
  let frame = [];
  let colors = ["F60707", "FF8300", "01E9E6", "51FF00", "0055FF", "6800FF", "FF00F3"];

 

  for (let i = 0; i < 15; i++)
  {

    if (values[i] != null && values[i] === values[i].toUpperCase())
      frame.push(<div style= {{color: "#" + colors[values[i].charAt(1)]}} key={i}>{values[i].charAt(0).toLowerCase()}</div>);

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