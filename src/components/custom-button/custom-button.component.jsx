import React from 'react';
import {CoustomButtonContainer } from './custom-button.styles'

const CustomButton = ({
  children,
  Inverted,
  ...otherProps
}) =>(
  <CoustomButtonContainer Inverted={Inverted} {...otherProps} >
    {children}
  </CoustomButtonContainer>
);

export default CustomButton;
