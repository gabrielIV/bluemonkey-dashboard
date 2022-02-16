import React from 'react';

function Input({ placeholder, type, className, label, description }) {
  return (
    <div class='form-group'>
      {label && <label for='exampleInputEmail1'>{label}</label>}
      <input
        type={type}
        className={'form-control ' + className}
        placeholder={placeholder}
      />
      {description && <small class='form-text text-muted'>{description}</small>}
    </div>
  );
}

export default Input;
