import React, {useEffect} from 'react';
import ButtonGreen from  '../../components/ButtonGreen/ButtonGreen';
import headerSvg from '../../../assets/imgs/undraw_city_driver_jh2h.svg';
import { Accordion,  AccordionSummary, AccordionDetails, Typography, makeStyles } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { openNavbar, openFooter } from '../../../store/actions/viewActions';

const useStyles = makeStyles({
  heading: {
    fontSize: '1.1rem',
  }
})

const AboutUs = (props) => {

  useEffect(() => {
    props.openNavbar();
    props.openFooter();
  }, [])

  const classes = useStyles();

  return (
    <div className='top-offset AboutUs'>
      <header className='AboutUsHeader  box-shadow'>
        <div className='AboutUsHeaderText' >
          <h1><span className='text-green'>Premium</span> Car Rentals</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis imperdiet nisl, eget vulputate velit aliquam in.Vivamus iaculis aliquam risus. Sed tempus mattis erat, et rutrum orci mattis at. Pellentesque pulvinar, libero eget mattis dictum, ex nulla pulvinar diam, sit amet iaculis orci dui quis odio. Sed vel quam aliquet, fringilla mauris at, tempus eros.</p>
          <ButtonGreen
            text='View Vehicles'
            component={Link}
            to='/vehicles'
          />
        </div>
        <img src={headerSvg} alt='city driver illustration' style={{maxWidth: '500px'}} />
      </header>

      <div className='AboutUsAccordionHeading' >
        <h3>Frequently Asked Questions</h3>
      </div>
      <div className='AboutUsAccordion'>
        <h4>Payment</h4>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading} >What forms of payment are accepted for renting a car?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Morbi vel sapien egestas nisi ornare convallis at et urna. Morbi vulputate a tellus vitae lacinia. Sed fermentum justo non nunc commodo, eu commodo quam fermentum. Aliquam egestas maximus neque, at finibus lorem sollicitudin vel. Aenean nibh ante, vulputate ut velit eu, tristique rutrum nunc.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading} >Is a car rental deposit required?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Morbi vel sapien egestas nisi ornare convallis at et urna. Morbi vulputate a tellus vitae lacinia. Sed fermentum justo non nunc commodo, eu commodo quam fermentum. Aliquam egestas maximus neque, at finibus lorem sollicitudin vel. Aenean nibh ante, vulputate ut velit eu, tristique rutrum nunc.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading} >Can I pay for the rental of a car for another individual?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Morbi vel sapien egestas nisi ornare convallis at et urna. Morbi vulputate a tellus vitae lacinia. Sed fermentum justo non nunc commodo, eu commodo quam fermentum. Aliquam egestas maximus neque, at finibus lorem sollicitudin vel. Aenean nibh ante, vulputate ut velit eu, tristique rutrum nunc.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading} >Do you accept Cash or Money Orders?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Morbi vel sapien egestas nisi ornare convallis at et urna. Morbi vulputate a tellus vitae lacinia. Sed fermentum justo non nunc commodo, eu commodo quam fermentum. Aliquam egestas maximus neque, at finibus lorem sollicitudin vel. Aenean nibh ante, vulputate ut velit eu, tristique rutrum nunc.</Typography>
          </AccordionDetails>
        </Accordion>
        <h4>Preparation</h4>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading} >What steps are being taken to clean rental cars?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Morbi vel sapien egestas nisi ornare convallis at et urna. Morbi vulputate a tellus vitae lacinia. Sed fermentum justo non nunc commodo, eu commodo quam fermentum. Aliquam egestas maximus neque, at finibus lorem sollicitudin vel. Aenean nibh ante, vulputate ut velit eu, tristique rutrum nunc.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading} >What is your pet policy?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Morbi vel sapien egestas nisi ornare convallis at et urna. Morbi vulputate a tellus vitae lacinia. Sed fermentum justo non nunc commodo, eu commodo quam fermentum. Aliquam egestas maximus neque, at finibus lorem sollicitudin vel. Aenean nibh ante, vulputate ut velit eu, tristique rutrum nunc.</Typography>
          </AccordionDetails>
        </Accordion>
        <h4>Reservation</h4>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading} >What is the current car rental process?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Morbi vel sapien egestas nisi ornare convallis at et urna. Morbi vulputate a tellus vitae lacinia. Sed fermentum justo non nunc commodo, eu commodo quam fermentum. Aliquam egestas maximus neque, at finibus lorem sollicitudin vel. Aenean nibh ante, vulputate ut velit eu, tristique rutrum nunc.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading} >Can I modify, extend, or cancel my reservation?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Morbi vel sapien egestas nisi ornare convallis at et urna. Morbi vulputate a tellus vitae lacinia. Sed fermentum justo non nunc commodo, eu commodo quam fermentum. Aliquam egestas maximus neque, at finibus lorem sollicitudin vel. Aenean nibh ante, vulputate ut velit eu, tristique rutrum nunc.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading} >What are your renter requirements for renting in the US and Canada?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Morbi vel sapien egestas nisi ornare convallis at et urna. Morbi vulputate a tellus vitae lacinia. Sed fermentum justo non nunc commodo, eu commodo quam fermentum. Aliquam egestas maximus neque, at finibus lorem sollicitudin vel. Aenean nibh ante, vulputate ut velit eu, tristique rutrum nunc.</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  view: state.view
});

export default connect(mapStateToProps, { openNavbar, openFooter })(AboutUs);