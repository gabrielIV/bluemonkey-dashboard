import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../layout';
import Home from './home';

class DasboardEditor extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Layout>
    );
  }
}

export default DasboardEditor;
