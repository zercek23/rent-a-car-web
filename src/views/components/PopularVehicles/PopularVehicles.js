import React from 'react';
import { Link } from 'react-router-dom';
import ButtonGreen from '../ButtonGreen/ButtonGreen';
import CarCards from '../CarCards/CarCards';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import cars from '../../../helpers/cars';

export default function PopularVehicles() {
  return (
    <div className='section top-offset'>
      <div className='section-heading'>
        <h2>Popular Vehicles</h2>
        <div className='HeadingUnderline'></div>
      </div>
      <CarCards 
        cars={cars}
        minIndex={0} 
        maxIndex={5}
      />
      <ButtonGreen
        text='View All'
        component={Link}
        to='/rent-a-car/vehicles'
        className='PopularVehiclesButton'
        style={{
          width: '120px',
          margin: '0 auto',
          marginTop: '24px',
        }}
        endIcon={<ArrowForwardIcon />}
      />
    </div>
  )
}