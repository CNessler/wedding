import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TestRoute from './components/TestRoute';

ReactDOM.render(
    <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route exact path='/test' component={TestRoute} />
      </div>
  </Router>,
  document.getElementById('root')
    );
registerServiceWorker();
