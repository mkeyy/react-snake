import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch, browserHistory } from "react-router-dom";

import GameStart from "./components/ui/GameStart.jsx";
import GameEngine from "./components/game/GameEngine.jsx";
import GameEnd from "./components/ui/GameEnd.jsx";
import "./styles/style.scss";

render(
  <BrowserRouter history={browserHistory}>
    <Switch>
      <Route path="/" exact component={GameStart} />
      <Route path="/game" component={GameEngine} />
      <Route path="/end" component={GameEnd} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("app")
);

module.hot.accept();
