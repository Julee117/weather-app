import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import City from './City';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path={`/:name`} component={City} />
    </Switch>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
