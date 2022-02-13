import React, { Component } from 'react';
import { Diagram2, HouseDoor, LayoutWtf } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Menu from './components/system/menu';

class Layout extends Component {
  state = {};
  render() {
    return (
      <div className='app bg-light'>
        <Menu
          menu={[
            {
              name: 'Home',
              icon: <HouseDoor size={20} />,
              link: '/',
              access: 'all',
            },

            {
              name: 'APIs',
              icon: <Diagram2 size={20} />,
              link: '/api',
              access: 'magazines_READ',
            },

            {
              name: 'Dasboards',
              icon: <LayoutWtf size={20} />,
              link: '/dashboards',
              access: 'articles_READ',
            },
          ]}></Menu>

        <div className='app-main'>{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;
