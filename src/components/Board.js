import React, { Component } from 'react';
import Square from './Square';
import {calculateWinner} from '../assets/helpers.js';

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      p1IsNext: true
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.p1IsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      p1IsNext: !this.state.p1IsNext
    });
  }

  renderSquare(i) {
    return (<Square
      value={this.state.squares[i]}
      onClick={() => {this.handleClick(i)}}
     />
   );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;

    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.p1IsNext ? 'Player 1' : 'Player 2');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
