import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends Component {
  state = { active: null };
  render() {
    return (
      <div className='side-menu border-end'>
        <div className='side-nav mt-5'>
          {this.props.menu.map((d, i) => (
            <NavLink
              className={({ isActive }) => 'nav-link ' + (isActive && 'active')}
              to={d.link}
              key={i}>
              <div className='me-3'>{d.icon}</div> <div> {d.name}</div>
            </NavLink>
          ))}
        </div>
      </div>
    );
  }

  componentDidUpdate(prevProps) {}
}

export default Menu;
