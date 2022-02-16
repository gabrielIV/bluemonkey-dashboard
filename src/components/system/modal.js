import React from 'react';

function Modal({ title, isActive, children, close }) {
  return (
    <div class={'modal fade ' + (isActive && 'show d-block ')} tabindex='-1'>
      <div class='modal-dialog modal-dialog-centered modal-dialog-scrollable'>
        <div class='modal-content'>
          <div class='modal-header border-0'>
            {title && <h5 class='modal-title title'>{title}</h5>}
            <button
              type='button'
              class='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
              onClick={() => close(false)}></button>
          </div>
          <div class='modal-body'>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
