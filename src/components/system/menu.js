import React, { Component } from 'react';
import { Link, useLocation } from 'react-router-dom';

class Menu extends Component {
  state = { active: null };
  render() {
    return (
      <div className='side-menu border-end'>
        <div className='side-nav'>
          {this.props.menu.map((d, i) => (
            <Link
              className={
                'nav-link ' + (this.state.active === d.link && 'active')
              }
              to={d.link}
              key={i}>
              <div className='me-3'>{d.icon}</div> <div> {d.name}</div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  componentDidUpdate(prevProps) {
    console.log(useLocation());
  }
}

export default Menu;
