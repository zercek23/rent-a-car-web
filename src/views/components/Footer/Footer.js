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
            <p className='text-white'>Kolay araç kiralama servisi</p>
          </div>
          <div className='text-white ContactInfo'>
            <h4 className='border-bottom-w'>Contact Info</h4>
            <p className='ContactInfo-item'>
            <StayPrimaryPortraitOutlinedIcon className={classes.margin}/>
            0555 555 55 55
            </p>
            <p className='ContactInfo-item'>
            <LocationOnOutlinedIcon className={classes.margin}/>
            Serdivan/Sakarya
            </p>
          </div>     
        </div>
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