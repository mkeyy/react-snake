import React from "react";
import { Link } from "react-router-dom";

const GameEnd = () => (
  <div>
    <h1 className="snake-h1">Game Over</h1>
    <div />
    <Link to="/">Try Again</Link>
  </div>
);

export default GameEnd;
