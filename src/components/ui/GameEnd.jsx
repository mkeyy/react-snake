import React from "react";
import { Link } from "react-router-dom";

const GameEnd = () => (
  <div className="snake-end">
    <h1 className="snake-h1">Game Over</h1>
    <div />
    <Link to="/" className="snake-link">
      Try Again
    </Link>
  </div>
);

export default GameEnd;
