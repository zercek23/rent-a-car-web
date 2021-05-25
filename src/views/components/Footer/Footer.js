import React from 'react';
import BrandLink from '../BrandLink/BrandLink';
import ButtonGreen from '../ButtonGreen/ButtonGreen';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import StayPrimaryPortraitOutlinedIcon from '@material-ui/icons/StayPrimaryPortraitOutlined';
import { makeStyles, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { connect } from 'react-redux';

const useStyles = makeStyles({
  margin: {
    marginRight: '5px',
  },
  link: {
    marginBottom: '16px',
  },
})

const Footer = (props) => {
  const classes = useStyles();
  if (props.view.footer) {
    return (
      <div className='top-offset Footer'>
        <div className='FooterMainContent'>
          <div>
            <BrandLink
              style={{
                marginTop: '0',
              }}
            />
            <p className='text-white'>Find your perfect rental car, fast!</p>
          </div>
          <div className='text-white ContactInfo'>
            <h4 className='border-bottom-w'>Contact Info</h4>
            <p className='ContactInfo-item'>
            <StayPrimaryPortraitOutlinedIcon className={classes.margin}/>
            (111)-222-3333
            </p>
            <p className='ContactInfo-item'>
            <LocationOnOutlinedIcon className={classes.margin}/>
            1600 Pennsylvania Ave 20500
            </p>
            <p className='ContactInfo-item'>
            <AccessTimeIcon className={classes.margin}/>
            Monday - Saturday | 8:00 - 5:00
            </p>
          </div>
          <div className='text-white'>
            <h4 className='border-bottom-w'>Newsletter</h4>
            <p>Don't miss a deal! Sign up to receive rewards</p>
            <form autoComplete='off'>
              <input 
                className='FooterEmail'
                type='email' 
                aria-label='email input'
                //placeholder='email@example.com'
              >
              </input>
              <ButtonGreen
                text='Subscribe'
                style={{
                  width: '110px',
                  display: 'block',
                  marginTop: '10px'
                }}
                type='submit'
              />
            </form>
          </div>
        </div>
        <div className='text-white FooterNav'>
          <Link 
            className={classes.link}
            color="inherit"
            component={RouterLink}
            to='/rent-a-car/'
          >
            Home
          </Link>
          <div className='FooterNavDivide'>
            |
          </div>
          <Link 
            className={classes.link}
            color="inherit"
            component={RouterLink}
            to='/rent-a-car/vehicles'
          >
            Vehicles
          </Link>
          <div className='FooterNavDivide'>
            |
          </div>
          <Link 
            className={classes.link}
            color="inherit"
            component={RouterLink}
            to='/rent-a-car/about'
          >
            About Us
          </Link>
          <div className='FooterNavDivide'>
            |
          </div>
          <Link 
            className={classes.link}
            color="inherit"
            component={RouterLink}
            to='/rent-a-car/contact'
          >
            Contact
          </Link>
        </div>
        <p className='text-white copyright'>©Copyright Rent-a-Car - Site by Dalton Perkins</p>
      </div>
    )
  } else {
    return (<div></div>)
  }
  
}

const mapStateToProps = (state) => ({
  view: state.view
});

export default connect(mapStateToProps, { })(Footer);