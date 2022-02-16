import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import DasboardEditor from './editor';
import './css/style.scss';

function App() {
  return (
    <div>
      {/* initialize dashboard editor route */}
      <Router basename='god_mode'>
        <DasboardEditor></DasboardEditor>
      </Router>
    </div>
  );
}

export default App;
