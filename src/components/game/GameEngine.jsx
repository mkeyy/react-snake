import React, { Component } from "react";

import Snake from "./Snake.jsx";
import Food from "./Food.jsx";

class GameEngine extends Component {
  constructor() {
    super();

    this.state = {
      cellsX: 21,
      cellsY: 21,
      rez: 25,
      speed: 200,
      running: true
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
        this.setState({ running: false });
        break;
    }
  };

  game = () => {
    let board = document.getElementById("board");
    let ctx = board.getContext("2d");

    let int = setInterval(() => {
      ctx.clearRect(0, 0, board.width, board.height);
      this.food.show();

      if (this.snake.handleEat(this.food)) {
        ctx.clearRect(0, 0, board.width, board.height);
        this.food.update();
      }

      this.snake.update();
      this.snake.show();

      if (!this.state.running || this.snake.handleEndgame()) {
        alert("ENDGAME");
        clearInterval(int);
      }
    }, this.state.speed);
  };

  render() {
    const { cellsX, cellsY } = this.state;
    const width = cellsX * this.state.rez;
    const height = cellsY * this.state.rez;

    return <canvas id="board" width={width} height={height} />;
  }
}

export default GameEngine;
