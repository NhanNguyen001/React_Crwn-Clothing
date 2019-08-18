import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...outherProps }) => (
  <button
    className={`${inverted ? 'inverted' : '' } 
    ${isGoogleSignIn ? 'google-sign-in' : '' } custom-button`} 
    {...outherProps}
  >
    {children}
  </button>
);

export default CustomButton;