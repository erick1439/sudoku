import React from 'react'
import './board.css';
import axios from 'axios';
import SudokuToolCollection from "sudokutoolcollection";
import MiniBoard from '../MiniBoard/miniBoard.js';

const sudoku = SudokuToolCollection();

class Board extends React.Component {

  constructor(props){
    super(props);
    this.state = {
     row0: [],
     row1: [],
     row2: [],
     row3: [],
     row4: [],
     row5: [],
     row6: [],
     row7: [],
     row8: [],
    }
  }

componentDidMount()
{
    let grid = new Array(9);

    for (let i = 0; i < grid.length; i++)
      grid[i] = new Array(9);


    axios.get('http://localhost:8080/sudoku').then((response) => {

      for (let i = 0; i < 9; i++)
      {
        for (let j = 0; j < 9; j++)
          grid[i][j] = response.data[i][j];
      }

      this.setState({row0 : grid[0]});
      this.setState({row1 : grid[1]});
      this.setState({row2 : grid[2]});
      this.setState({row3 : grid[3]});
      this.setState({row4 : grid[4]});
      this.setState({row5 : grid[5]});
      this.setState({row6 : grid[6]});
      this.setState({row7 : grid[7]});
      this.setState({row8 : grid[8]});

      console.log(grid);

      
    }).catch(error => {

        console.log(error);
    });
}

  render(){
     return(
      <div className="board">
        <MiniBoard values={this.state.row0}/>
        <MiniBoard values={this.state.row1}/>
        <MiniBoard values={this.state.row2}/>
        <MiniBoard values={this.state.row3}/>
        <MiniBoard values={this.state.row4}/>
        <MiniBoard values={this.state.row5}/>
        <MiniBoard values={this.state.row6}/>
        <MiniBoard values={this.state.row7}/>
        <MiniBoard values={this.state.row8}/>
      </div>
    )
  }
}
export default Board;
