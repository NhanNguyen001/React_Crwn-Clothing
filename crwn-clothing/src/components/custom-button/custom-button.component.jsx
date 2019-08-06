import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, ...outherProps }) => (
  <button className='custom-button' {...outherProps}>
    {children}
  </button>
);

export default CustomButton;