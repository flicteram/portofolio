import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter as Router} from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import ReactGA from "react-ga4"

ReactGA.initialize("G-SMDTXG50TG")
ReactDOM.render(
    <Router>
      <ScrollToTop/>
      <App />
    </Router>,
  document.getElementById('root')
);


