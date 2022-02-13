import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import DasboardEditor from './editor';
import './css/style.scss';
import Layout from './layout';

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        {/* initialize dashboard editor route */}
        <Router basename='god_mode'>
          <DasboardEditor></DasboardEditor>
        </Router>
      </div>
    );
  }
}

export default App;
