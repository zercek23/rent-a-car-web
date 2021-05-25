import React from 'react';
import { Button, withStyles } from '@material-ui/core';

const StyledButton = withStyles({
  root: {
    color: '#ffffff',
    fontWeight: 'bold',
    textTransform: 'none',
    background: 'linear-gradient(45deg, #0eb425 30%, #00D60F 90%)',
    '&:hover': {
      background: 'linear-gradient(45deg, #0ca221 30%, #00c00d 90%)',
    },
  },
})(Button);

export default function ButtonGreen(props) {
  return (
    <StyledButton 
      href={props.href}
      style={props.style}
      startIcon={props.startIcon}
      variant={props.variant}
      endIcon={props.endIcon}
      type={props.type}
      component={props.component}
      to={props.to}
      onClick={props.onClick}
    >
      {props.text}
    </StyledButton>
  )
}