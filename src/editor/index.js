import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../layout';
import ApiServers from './apiServers';
import Home from './home';

function DashboardEditor() {
  return (
    <Layout>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/apis' element={<ApiServers />} />
      </Routes>
    </Layout>
  );
}

export default DashboardEditor;
