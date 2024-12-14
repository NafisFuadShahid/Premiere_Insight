import React from 'react';
import './Button.css';

const Button = ({ children, onClick, variant = 'primary', disabled = false }) => {
  return (
    <button
      className={`button ${variant} ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

