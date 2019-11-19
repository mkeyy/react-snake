import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GameStart from './components/ui/GameStart.jsx';
import GameEngine from './components/game/GameEngine.jsx';
import Scores from './components/ui/Scores.jsx';
import GameEnd from './components/ui/GameEnd.jsx';
import './assets/styles/style.scss';

render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={GameStart} />
      <Route path="/game" component={GameEngine} />
      <Route path="/scores" component={Scores} />
      <Route path="/end" component={GameEnd} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('app')
);

module.hot.accept();
