import React from 'react';

function Card({ title, children, className, onClick }) {
  return (
    <div
      className={'card ' + className}
      onClick={() => {
        if (onClick) onClick();
      }}>
      <div class='card-body'>
        {title && <h5 class='card-title'>{title}</h5>}

        {children}
      </div>
    </div>
  );
}

export default Card;
