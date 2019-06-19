import Vector from "../helpers/Vector";

class Food {
  constructor(cellsX, cellsY) {
    this.x = this.random(0, cellsX);
    this.y = this.random(0, cellsY);
    this.cellsX = cellsX;
    this.cellsY = cellsY;
    this.food = new Vector(this.x, this.y);
  }

  update = () => {
    this.x = this.random(0, this.cellsX);
    this.y = this.random(0, this.cellsY);

    this.show();
  };

  show = () => {
    let board = document.getElementById("board");
    let ctx = board.getContext("2d");

    ctx.fillStyle = "rgba(0, 0, 0, 1)";
    ctx.fillRect(this.x, this.y, 1, 1);
  };

  random = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };
}

export default Food;
