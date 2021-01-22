import React from 'react';
import axios from 'axios';
import WordList from '../WordList/wordList.js';
import Navbar from '../NavBar/navbar.js';
import WordBoard from '../WordBoard/wordBoard.js'

import './wordSearchPage.css';

class WordSearch extends React.Component {
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
            row9: [],
            row10: [],
            row11: [],
            row12: [],
            row13: [],
            row14: [],
            wordList: [],
            status: null
        }
    }

    async componentDidMount()
    {
        let list = new Array(7);
        let grid = new Array(15);
    
        for (let i = 0; i < grid.length; i++)
          grid[i] = new Array(15);

        await axios.get('http://localhost:8080/word-search/getList').then((response) => {

        for (let i = 0; i < list.length; i++)
            list[i] = response.data[i];
        
        this.setState({wordList : list});

        }).catch(error => {
    
            console.log(error);
        });
    
    
        await axios.get('http://localhost:8080/word-search').then((response) => {
    
          for (let i = 0; i < 15; i++)
          {
            for (let j = 0; j < 15; j++)
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
          this.setState({row9 : grid[9]});
          this.setState({row10 : grid[10]});
          this.setState({row11 : grid[11]});
          this.setState({row12 : grid[12]});
          this.setState({row13 : grid[13]});
          this.setState({row14 : grid[14]});

          
        }).catch(error => {
    
            console.log(error);
        });
    }

    async newTable() {

        let list = new Array(7);
        let grid = new Array(15);
    
        for (let i = 0; i < grid.length; i++)
          grid[i] = new Array(15);

        await axios.get('http://localhost:8080/word-search/getList').then((response) => {

        for (let i = 0; i < list.length; i++)
            list[i] = response.data[i];
        
        this.setState({wordList : list});

        }).catch(error => {
    
            console.log(error);
        });
    
    
        await axios.get('http://localhost:8080/word-search').then((response) => {
    
          for (let i = 0; i < 15; i++)
          {
            for (let j = 0; j < 15; j++)
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
          this.setState({row9 : grid[9]});
          this.setState({row10 : grid[10]});
          this.setState({row11 : grid[11]});
          this.setState({row12 : grid[12]});
          this.setState({row13 : grid[13]});
          this.setState({row14 : grid[14]});

          
        }).catch(error => {
    
            console.log(error);
        });
  }

  async solvePuzzle () {

    let grid = new Array(15);
    
    for (let i = 0; i < grid.length; i++)
      grid[i] = new Array(15);

    grid[0] = this.state.row0;
    grid[1] = this.state.row1;
    grid[2] = this.state.row2;
    grid[3] = this.state.row3;
    grid[4] = this.state.row4;
    grid[5] = this.state.row5;
    grid[6] = this.state.row6;
    grid[7] = this.state.row7;
    grid[8] = this.state.row8;
    grid[9] = this.state.row9;
    grid[10] = this.state.row10;
    grid[11] = this.state.row11;
    grid[12] = this.state.row12;
    grid[13] = this.state.row13;
    grid[14] = this.state.row14;


    await axios.get('http://localhost:8080/word-search/solveWordSearch')
    .then(function (response) {

      for (var i = 0; i < response.data.length; i++)
      {
          for (var j = 0; j < response.data[i].length; j++)
          {
              var c = grid[response.data[i][j][0]][response.data[i][j][1]].charAt(0).toUpperCase();
              grid[response.data[i][j][0]][response.data[i][j][1]] = c;
       
            // console.log(response.data[i][j][0] + "," + response.data[i][j][1]);
          }
      }
    })
    .catch(function (error) {
      console.log(error);
    });

    this.setState({row0 : grid[0]});
    this.setState({row1 : grid[1]});
    this.setState({row2 : grid[2]});
    this.setState({row3 : grid[3]});
    this.setState({row4 : grid[4]});
    this.setState({row5 : grid[5]});
    this.setState({row6 : grid[6]});
    this.setState({row7 : grid[7]});
    this.setState({row8 : grid[8]});
    this.setState({row9 : grid[9]});
    this.setState({row10 : grid[10]});
    this.setState({row11 : grid[11]});
    this.setState({row12 : grid[12]});
    this.setState({row13 : grid[13]});
    this.setState({row14 : grid[14]});
  }

   render(){
        return(
            <div>
                <Navbar solvePuzzle={this.solvePuzzle.bind(this)} newTable={this.newTable.bind(this)}/>
                <div className="wordSearchPage">
                    <WordBoard data={this.state}/>
                    <div className="words"><WordList data={this.state.wordList}/></div>
                </div> 
            </div>

    )}
}

export default WordSearch;