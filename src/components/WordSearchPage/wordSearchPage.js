import React from 'react';
import axios from 'axios';
import Navbar from '../NavBar/navbar.js';
import WordBoard from '../WordBoard/wordBoard.js'
import './wordSearchPage.css';
class WordSearch extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
            row0: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],
            row1: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],
            row2: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],
            row3: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],
            row4: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],
            row5: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],
            row6: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],
            row7: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],
            row8: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],
            row9: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],
            row10: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],
            row11: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],
            row12: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],
            row13: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],
            row14: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],
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
                    <div className="words">
                        <p>Luis</p>
                        <p>Jose</p>
                        <p>Esteban</p>
                    </div>
                </div>
            </div>

    )}
}

export default WordSearch;