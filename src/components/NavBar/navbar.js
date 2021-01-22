import React from 'react';
import './navbar.css';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Navbar(props) {

  function check()
  {
    props.checkPuzzle();
  }

  function newTable()
  {
    props.newTable();
  }

  function solve() {
    props.solvePuzzle();
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to={"/"}> <img alt="Back button" src="./backIcon.png" heigth="50" width="50"/> </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <Button onClick={newTable} className="option">New Table</Button>
            {/* <Button onClick={check} className="option">Check Puzzle</Button> */}
            <Button onClick={solve} className="option">Solve Puzzle</Button>
          </ul>
        </div>
      </div>
    </nav> 
  );
}

export default Navbar