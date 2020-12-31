import React from 'react';
import Board from '../Board/board.js';
import Navbar from '../NavBar/navbar.js';

function Sudoku() {
    return(
        <div>
            <Navbar/>
            <div style={{margin: "100px 400px", display: "flex" }}>
                <Board/>
            </div>
            
        </div>

    );
}

export default Sudoku