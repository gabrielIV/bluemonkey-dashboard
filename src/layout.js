import React, { Component } from 'react';
import { Diagram2, HouseDoor, LayoutWtf } from 'react-bootstrap-icons';
import Menu from './components/system/menu';
import monkeyLogo from './img/monkey.png';

function Layout({ children }) {
  // Dashboard editor menu
  let menu = [
    {
      name: 'Home',
      icon: <HouseDoor size={20} />,
      link: '/',
      access: 'all',
    },

    {
      name: 'APIs',
      icon: <Diagram2 size={20} />,
      link: '/apis',
      access: 'magazines_READ',
    },

    {
      name: 'Dasboards',
      icon: <LayoutWtf size={20} />,
      link: '/dashboards',
      access: 'articles_READ',
    },
  ];

  return (
    <div className='app bg-light'>
      <Menu menu={menu} navLogo={monkeyLogo}></Menu>

      <div className='app-main'>{children}</div>
    </div>
  );
}

export default Layout;
