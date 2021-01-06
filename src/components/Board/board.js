import React from 'react'
import './board.css';
import MiniBoard from '../MiniBoard/miniBoard.js';

function Board(props) {
     return(
        <div className="board">
        <div className="board_frame-container">
          <div className="board_frame board_frame-top board_frame-left"></div>
          <div className="board_frame board_frame-top board_frame-left"></div>
          <div className="board_frame board_frame-top board_frame-left board_frame-right"></div>
          <div className="board_frame board_frame-top board_frame-left"></div>
          <div className="board_frame board_frame-top board_frame-left"></div>
          <div className="board_frame board_frame-top board_frame-left board_frame-right"></div>
          <div className="board_frame board_frame-top board_frame-bottom board_frame-left"></div>
          <div className="board_frame board_frame-top board_frame-bottom board_frame-left"></div>
          <div className="board_frame board_frame-top board_frame-bottom board_frame-left board_frame-right"></div>
        </div>
          <MiniBoard values={props.data.row0}/>
          <MiniBoard values={props.data.row1}/>
          <MiniBoard values={props.data.row2}/>
          <MiniBoard values={props.data.row3}/>
          <MiniBoard values={props.data.row4}/>
          <MiniBoard values={props.data.row5}/>
          <MiniBoard values={props.data.row6}/>
          <MiniBoard values={props.data.row7}/>
          <MiniBoard values={props.data.row8}/>
        </div>
    )
}
export default Board;
