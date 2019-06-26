import React from "react";
import { Link } from "react-router-dom";

const GameStart = () => (
  <div className="snake-start">
    <h1 className="snake-h1">Snake</h1>
    <Link to="/game">Start</Link>
  </div>
);

export default GameStart;
