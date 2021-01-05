import React from 'react';
import './navbar.css';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Navbar(props) {

  function checkPuzzle()
  {
    alert("working on it");
  }

  function solve() {
    props.solvePuzzle();
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to={"/"}>back</Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <Button onClick={solve} className="option">Solve Puzzle</Button>
            <Button onClick={checkPuzzle} className="option">Check Puzzle</Button>
          </ul>
        </div>
      </div>
    </nav> 
  );
}

export default Navbar