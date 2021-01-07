import React from 'react';
import './wordBoard.css';
import WordMiniBoard from '../WordMiniBoard/wordMiniBoard.js';

function WordBoard(props){
    return (
        <div className="board">
        <WordMiniBoard values={props.data.row0}/>
        <WordMiniBoard values={props.data.row1}/>
        <WordMiniBoard values={props.data.row2}/>
        <WordMiniBoard values={props.data.row3}/>
        <WordMiniBoard values={props.data.row4}/>
        <WordMiniBoard values={props.data.row5}/>
        <WordMiniBoard values={props.data.row6}/>
        <WordMiniBoard values={props.data.row7}/>
        <WordMiniBoard values={props.data.row8}/>
        <WordMiniBoard values={props.data.row9}/>
        <WordMiniBoard values={props.data.row10}/>
        <WordMiniBoard values={props.data.row11}/>
        <WordMiniBoard values={props.data.row12}/>
        <WordMiniBoard values={props.data.row13}/>
        <WordMiniBoard values={props.data.row14}/>
        </div>
    );
}

export default WordBoard;