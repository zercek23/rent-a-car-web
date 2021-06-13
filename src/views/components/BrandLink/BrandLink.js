import React from 'react';
import { Link, withStyles } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const BrandedLink = withStyles(() => ({
  root: {
    '&:hover': {
      textDecoration: 'none',
    },
    '&:focus': {
      outline: 'none',
    }
  }
}))(Link);

export default function BrandLink(props) {
  return (
    <BrandedLink component={RouterLink} to='/rent-a-car/' >
      <h3 className='NavBrand' style={props.style}>
        Rent
        <span className='NavSpan'>-a-</span>
        Car
      </h3>
    </BrandedLink>
  )
}