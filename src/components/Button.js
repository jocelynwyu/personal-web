import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const openResume = () => {
    // Open the link in a new tab
    const downloadWindow = window.open(
        <image src='images/Resume.png'/>
    );

    if (downloadWindow) {
      downloadWindow.focus();
    }
  };

  return (
    <Link to='/' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onclick={openResume}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};