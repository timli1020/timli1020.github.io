import React from 'react';

class Square extends React.Component {
    render() {
      return (
        <button className="square">
          {/* TODO */}
        </button>
      );
    }
  }
  
class Board extends React.Component {
    renderSquare(i) {
        return <Square/>;
    }

    render() {
        const status = "Next player: X";

        return (
            <div>
                <div className="status">{status}</div>
            </div>
        )
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board/>
                </div>
            </div>
        )
    }
}


ReactDOM.render(
    <Game />,
    document.getElementById('root')
)