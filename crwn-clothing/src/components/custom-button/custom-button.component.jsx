import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...outherProps }) => (
  <button 
    className={`${isGoogleSignIn ? 'google-sign-in' : '' } custom-button`} 
    {...outherProps}
  >
    {children}
  </button>
);

export default CustomButton;