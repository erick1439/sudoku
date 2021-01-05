import React from 'react';
import './navbar.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Navbar(props) {

  function checkPuzzle()
  {
    alert("working on it");
  }

  function solvePuzzle(){

    let temp = new Array(9);

    for (let i = 0; i < 9; i++)
      temp[i] = new Array(9);

      temp[0] = props.data.row0;
      temp[1] = props.data.row1;
      temp[2] = props.data.row2;
      temp[3] = props.data.row3;
      temp[4] = props.data.row4;
      temp[5] = props.data.row5;
      temp[6] = props.data.row6;
      temp[7] = props.data.row7;
      temp[8] = props.data.row8;

    axios.post('http://localhost:8080/sudoku', {
      array : temp
    })
    .then(function (response) {
     
      
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to={"/"}>back</Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <Button onClick={solvePuzzle} className="option">Solve Puzzle</Button>
            <Button onClick={checkPuzzle} className="option">Check Puzzle</Button>
          </ul>
        </div>
      </div>
    </nav> 
  );
}

export default Navbar