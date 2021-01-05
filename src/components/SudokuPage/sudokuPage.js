import React from 'react';
import axios from 'axios';
import Board from '../Board/board.js';
import Navbar from '../NavBar/navbar.js';

class Sudoku extends React.Component {
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
          
        }).catch(error => {
    
            console.log(error);
        });
    }

    async solvePuzzle () {

      let result = [];
      
      let temp = new Array(9);

      for (let i = 0; i < 9; i++)
        temp[i] = new Array(9);

        temp[0] = this.state.row0;
        temp[1] = this.state.row1;
        temp[2] = this.state.row2;
        temp[3] = this.state.row3;
        temp[4] = this.state.row4;
        temp[5] = this.state.row5;
        temp[6] = this.state.row6;
        temp[7] = this.state.row7;
        temp[8] = this.state.row8;

      await axios.post('http://localhost:8080/sudoku', {
        array : temp
      })
      .then(function (response) {

        result = response.data;

      })
      .catch(function (error) {
        console.log(error);
      });


      this.setState({row0 : result[0]});
      this.setState({row1 : result[1]});
      this.setState({row2 : result[2]});
      this.setState({row3 : result[3]});
      this.setState({row4 : result[4]});
      this.setState({row5 : result[5]});
      this.setState({row6 : result[6]});
      this.setState({row7 : result[7]});
      this.setState({row8 : result[8]});
    }

    render(){
        return(
            <div>
                <Navbar solvePuzzle={this.solvePuzzle.bind(this)}/>
                <div style={{margin: "100px 400px", display: "flex" }}>
                    <Board data={this.state}/>
                </div>
            </div>
    )}
}

export default Sudoku