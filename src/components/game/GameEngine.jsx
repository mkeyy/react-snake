import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Snake from "./Snake.jsx";
import Food from "./Food.jsx";

class GameEngine extends Component {
  constructor() {
    super();

    this.state = {
      cellsX: 30,
      cellsY: 20,
      rez: 25,
      speed: 100,
      running: true,
      score: 0,
      time: 3,
      gameOver: false
    };

    this.snake = new Snake(this.state.cellsX, this.state.cellsY);
    this.food = new Food(this.state.cellsX, this.state.cellsY);
  }

  componentDidMount() {
    document.onkeydown = this.handleKeyPressed;
    document
      .getElementById("board")
      .getContext("2d")
      .scale(this.state.rez, this.state.rez);
    this.game();
  }

  handleKeyPressed = e => {
    e = e || window.event;

    switch (e.keyCode) {
      case 38:
        if (this.snake.getLength() > 1) {
          if (this.snake.getYDir() !== 1) this.snake.setDir(0, -1);
        } else this.snake.setDir(0, -1);
        break;
      case 40:
        if (this.snake.getLength() > 1) {
          if (this.snake.getYDir() !== -1) this.snake.setDir(0, 1);
        } else this.snake.setDir(0, 1);
        break;
      case 37:
        if (this.snake.getLength() > 1) {
          if (this.snake.getXDir() !== 1) this.snake.setDir(-1, 0);
        } else this.snake.setDir(-1, 0);
        break;
      case 39:
        if (this.snake.getLength() > 1) {
          if (this.snake.getXDir() !== -1) this.snake.setDir(1, 0);
        } else this.snake.setDir(1, 0);
        break;
      case 32:
        this.setState({ running: !this.state.running });
        break;
    }
  };

  game = () => {
    let board = document.getElementById("board");
    let ctx = board.getContext("2d");

    let timeInt = setInterval(() => {
      this.setState({ time: this.state.time - 1 });

      if (this.state.time < 0) {
        clearInterval(timeInt);
        document.getElementById("countdown").remove();
        let int = setInterval(() => {
          if (this.state.running) {
            ctx.clearRect(0, 0, board.width, board.height);
            this.food.show();

            if (this.snake.handleEat(this.food)) {
              ctx.clearRect(0, 0, board.width, board.height);
              this.food.update();
              this.setState({ score: this.state.score + 10 });
            }

            this.snake.update();
            this.snake.show();

            if (this.snake.handleEndgame()) {
              clearInterval(int);
              this.setState({ gameOver: true });
            }
          }
        }, this.state.speed);
      }
    }, 1000);
  };

  pad = (str, max) => {
    str = str.toString();
    return str.length < max ? this.pad("0" + str, max) : str;
  };

  render() {
    const { cellsX, cellsY, time, gameOver } = this.state;
    const width = cellsX * this.state.rez;
    const height = cellsY * this.state.rez;
    const score = this.pad(this.state.score, 4);

    if (gameOver)
      return (
        <Redirect
          to={{ pathname: "/end", state: { score: this.state.score } }}
        />
      );

    return (
      <div className="snake-board">
        <div className="snake-board__score">{score}</div>
        <div id="countdown" className="snake-board__countdown">
          <span>{time}</span>
        </div>
        <canvas id="board" width={width} height={height} />
      </div>
    );
  }
}

export default GameEngine;
