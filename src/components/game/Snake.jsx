import Vector from "../helpers/Vector";

class Snake {
  constructor(cellsX, cellsY) {
    this.length = 1;
    this.body = [];
    this.body[0] = new Vector(Math.floor(cellsX / 2), Math.floor(cellsY / 2));
    this.cellsX = cellsX;
    this.cellsY = cellsY;
    this.xdir = 0;
    this.ydir = -1;
  }

  handleEndgame = () => {
    let x = this.body[this.body.length - 1].x;
    let y = this.body[this.body.length - 1].y;

    if (x < 0 || x > this.cellsX - 1 || y < 0 || y > this.cellsY - 1)
      return true;

    for (let i = 0; i < this.body.length - 1; i++) {
      let part = this.body[i];
      if (part.x === x && part.y === y) {
        return true;
      }
    }
  };

  handleEat = food => {
    let x = this.body[this.body.length - 1].x;
    let y = this.body[this.body.length - 1].y;

    if (x === food.x && y === food.y) {
      this.handleGrow();
      return true;
    }

    return false;
  };

  handleGrow = () => {
    let head = { ...this.body[this.body.length - 1] };
    this.length++;
    this.body.push(head);
  };

  update = () => {
    let head = { ...this.body[this.body.length - 1] };

    this.body.shift();
    head.x += this.xdir;
    head.y += this.ydir;

    this.body.push(head);
  };

  show = () => {
    let board = document.getElementById("board");
    let ctx = board.getContext("2d");

    ctx.fillStyle = "rgb(0 ,0, 0, 0.3)";

    for (let i = 0; i < this.body.length; i++) {
      ctx.fillRect(this.body[i].x, this.body[i].y, 1, 1);
    }
  };

  setDir = (x, y) => {
    this.xdir = x;
    this.ydir = y;
  };

  getXDir = () => {
    return this.xdir;
  };

  getYDir = () => {
    return this.ydir;
  };

  getLength = () => {
    return this.length;
  };
}

export default Snake;
