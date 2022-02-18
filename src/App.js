import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import DashboardEditor from './editor';
import './css/style.scss';

function App() {
  return (
    <div>
      {/* initialize dashboard editor route */}
      <Router basename='god_mode'>
        <DashboardEditor></DashboardEditor>
      </Router>
    </div>
  );
}

export default App;
