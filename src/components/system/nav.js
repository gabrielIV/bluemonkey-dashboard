import React from 'react';

function Nav({ title, links = [] }) {
  return (
    <nav class='navbar '>
      <div class='container'>
        <h2 className='navbar-brand'>{title}</h2>

        <div
          class='navbar-toggler'
          type='button'
          aria-controls='navbarNavDropdown'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span class='navbar-toggler-icon'></span>
        </div>

        <div class='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul class='navbar-nav'>
            {links.map((link, i) => (
              <li class='nav-item' key={i}>
                <div className='nav-link'>{link}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
