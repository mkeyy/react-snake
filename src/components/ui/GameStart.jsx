import React from "react";
import { Link } from "react-router-dom";

const GameStart = () => (
  <div className="snake-start">
    <h1 className="snake-h1">Snake</h1>
    <Link to="/game" className="snake-link">
      Start
    </Link>
    <Link to="/scores" className="snake-link">
      Scores
    </Link>
    <Link to="/options" className="snake-link">
      Options
    </Link>
  </div>
);

export default GameStart;
