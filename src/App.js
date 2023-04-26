import React, { useState } from 'react';

import './App.css';

import { PlayBoard } from './components/PlayBoard';
import { ScoreBoard } from './components/ScoreBoard';

const WIN_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function App() {
  const [boardVal, setBoardVal] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [ended, setEnded] = useState(false);
  const [info, setInfo] = useState("");

  const handleBoxClick = (targetIdx) => {
    console.log(targetIdx + " clicked.");

    if (!ended) {
      const newBoard = boardVal.map((value, idx) => {
        if (idx === targetIdx) {
          return xPlaying ? "X" : "O";
        }
        else {
          return value;
        }
      });
  
      setBoardVal(newBoard);
  
      setXPlaying(!xPlaying);
  
      const winner = checkWinner(newBoard);
      if (winner){
        if (winner === "X") {
          let {xScore} = scores;
          setScores({...scores, xScore: xScore + 1});
          setInfo("X WINS")
          console.log(scores);
        } else {
          let {oScore} = scores;
          setScores({...scores, oScore: oScore + 1});
          setInfo("O WINS")
          console.log(scores);
        }
        setEnded(true);
      }
    }
  
  }

  const checkWinner = (board) => {
    for (let i = 0; i < 8; i++) {
      const [a, b, c] = WIN_CONDITIONS[i];

      if (board[a] && board[a] === board[b] && board[b] === board[c]){
        console.log(board[a] + " wins. (" + a + ", " + b + ", " + c + ")");
        return board[a];
      }
    }
  }

  const resetBoard = () => {
    setBoardVal(Array(9).fill(null));
    setXPlaying(true);
    setEnded(false);
    setInfo("");
  }

  return (
    <div className="App">
      <header className="App-header">
        <ScoreBoard scores={scores} xPlaying={xPlaying} />
        <PlayBoard board={boardVal} handleClick={handleBoxClick} />
        <button className='reset-btn' onClick={resetBoard}>{ ended ? "Play Again" : "Reset" }</button>
        <h1 className='info-bar'>{ info }</h1>
      </header>
    </div>
  );
}

export default App;
