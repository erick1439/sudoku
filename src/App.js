import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'

import Home from './components/Home/home.js'
import Sudoku from './components/SudokuPage/sudokuPage.js'
import Maze from './components/Maze/mazePage.js'
import WordSearch from './components/WordSearchPage/wordSearchPage.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
          <div className="App"> 
            <Route exact path='/' component={Home} />
            <Route path="/sudoku" component={Sudoku} />
            <Route path="/maze" component={Maze} />
            <Route path="/word-search" component={WordSearch} />
          </div>
      </Switch>
    </Router>
  );
}

export default App;