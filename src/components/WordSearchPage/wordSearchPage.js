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
            status: null
        }
    }

    componentDidMount()
    {
        let grid = new Array(15);
    
        for (let i = 0; i < grid.length; i++)
          grid[i] = new Array(15);
    
    
        axios.get('http://localhost:8080/word-search').then((response) => {
    
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

   render(){
        return(
            <div>
                <Navbar/>
                <div className="wordSearchPage">
                    <WordBoard data={this.state}/>

                    <div className="words"><WordList/></div>
                </div> 

            </div>

    )}
}

export default WordSearch;