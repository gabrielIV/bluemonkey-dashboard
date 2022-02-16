import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu({ menu, navLogo }) {
  return (
    <div className='side-menu border-end'>
      {navLogo && (
        <div className='nav-logo my-4'>
          <img src={navLogo} alt='' />
        </div>
      )}
      <div className='side-nav'>
        {menu.map((d, i) => (
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

export default Menu;
