import React, { useRef, useEffect } from 'react';
import 'flickity-imagesloaded';
import CheckIcon from '@material-ui/icons/Check';
import cars from '../../../helpers/cars';
import ButtonGreen from '../../components/ButtonGreen/ButtonGreen';
import CarCards from '../../components/CarCards/CarCards';
import 'flickity/dist/flickity.min.css';
import user from '../../../assets/icons/user-silhouette.png';
import dashboard from '../../../assets/icons/dashboard.png';
import shift from '../../../assets/icons/shift.png';
import carImg from '../../../assets/icons/car.png';
import dollarSign from '../../../assets/icons/dollar-sign-symbol-bold-text.png';
import { TweenMax, Power3 } from 'gsap';

import { connect } from 'react-redux';
import { openNavbar, openFooter } from '../../../store/actions/viewActions';

const checkStyle = {
  height: '18px',
}

const similarVehiclesStyle = {
  marginBottom: '25px',
}

const congratsMsg = 'Congrats you booked a fake ';

const rewardMsg = '\nCheck the console (F12)  for your reward';

const SingleCar = (props) => {

  useEffect(() => {
    props.openNavbar();
    props.openFooter();
  }, [])

  const { params: { vehicleId } } = props.match;

  const scrolTop = () => {
    window.scrollTo(0, 0);
  }

  let currentCar;

  cars.forEach((car) => {
    if(car.id === Number(vehicleId)) {
      currentCar = car; 
    }
  });
  
  let similarArray = [];

  cars.forEach((car, index) => {
    if (car === currentCar) {
      return;
    } else if (car.type === currentCar.type) {
      similarArray.push(car);
    }
  });

  let shortSimilarArray = similarArray.slice(0, 3);

  

  let carImgContainer = useRef(null);
  let carDescriptionContainer = useRef(null);
  let similarCarsH1 = useRef(null)

  useEffect(() => {
    TweenMax.to(carImgContainer, 0.5, {
      x: 0,
      opacity: 1,
      ease: Power3.easeIn,
    });

    TweenMax.to(carDescriptionContainer, 0.5, {
      x: 0,
      ease: Power3.easeIn,
    });

    TweenMax.to(similarCarsH1, 0.1, {
      opacity: 1,
      delay: 0.3,
      ease: Power3,
    });
  }, [currentCar]);

  return (
    <div className='SingleCar top-offset' >
      {scrolTop()}
      {cars.map(car => {
        if(car.id === Number(vehicleId)){
          return (
            <div key={car.id} className='SingleCarContainer' >
              <div
                className='SingleCarImgs box-shadow'
                ref={el => {carImgContainer = el}}
              >
                <img 
                  src={car.images[0]} 
                  alt={car.name}
                  className='SingleCarImg'
                />
              </div>
              <div 
                className='SingleCarDescription box-shadow' 
                ref={el => {carDescriptionContainer = el}}
              >
                
                <div className='SingleCarDescriptionH1'>
                  <h1>{car.name}</h1>
                </div>
                <div className='SingleCarSpecs' >
                  <div className='SingleCarSpec' >
                    <img 
                      className='SingleCarSpecImg'
                      src={user} 
                      alt='seats'
                    ></img>
                    <p>{car.seats} Seats</p>
                  </div>
                  <div className='SingleCarSpec' >
                    <img 
                      className='SingleCarSpecImg'
                      src={shift} 
                      alt='transmission'
                    ></img>
                    <p>Auto</p>
                    <p></p>
                  </div>
                  <div className='SingleCarSpec' >
                    <img 
                      className='SingleCarSpecImg'
                      src={carImg} 
                      alt='car doors'
                    ></img>
                    <p>{car.doors} Doors</p>
                  </div>
                  <div className='SingleCarSpec' >
                    <img 
                      className='SingleCarSpecImg'
                      src={dashboard} 
                      alt='mpg dashboard'
                    ></img>
                    <p>{car.mpg} mpg</p>
                  </div>
                </div>
                <div className='SingleCarFeatures' >
                  <div className='SingleCarFeature'>
                    <CheckIcon
                      style={checkStyle}
                    />
                    <p>Audio Input</p>
                  </div>
                  <div className='SingleCarFeature'>
                    <CheckIcon
                      style={checkStyle}
                    />
                    <p>Bluetooth</p>
                  </div>
                  <div className='SingleCarFeature'>
                    <CheckIcon
                      style={checkStyle}
                    />
                    <p>Heated Seats</p>
                  </div>
                  <div className='SingleCarFeature'>
                    <CheckIcon
                      style={checkStyle}
                    />
                    <p>All Wheel Drive</p>
                  </div>
                  <div className='SingleCarFeature'>
                    <CheckIcon
                      style={checkStyle}
                    />
                    <p>A/C & Heating</p>
                  </div>
                  <div className='SingleCarFeature'>
                    <CheckIcon
                      style={checkStyle}
                    />
                    <p>Dual Airbags</p>
                  </div>
                </div>
                <div className='SingleCarPrice' >
                  <div className='SingleCarPriceH2' >
                    <img
                      src={dollarSign}
                      alt='dollar sign'
                    > 
                    </img>
                    <h2>{car.price} <span>Per Day</span></h2>
                  </div>
                  <ButtonGreen
                    text='Book Now'
                    style={{
                      width: '100px',
                      margin: '8px 0 40px 0',
                    }}
                    onClick={() => {
                      console.log('YOU WIN: https://www.youtube.com/watch?v=DLzxrzFCyOs&ab_channel=AllKindsOfStuff');
                      alert(congratsMsg + car.name + rewardMsg);
                    }}
                  />
                </div>
              </div>
              <div 
                className='SingleCarSimilarH3' 
                ref={el => {similarCarsH1 = el}}
              >
                <h3>Similar Vehicles</h3>
              </div>
              <div className='SingleCarSimilar' >
                <CarCards
                  cars={shortSimilarArray}
                  vehicleId={vehicleId}
                  minIndex={0}
                  maxIndex={2}
                  style={similarVehiclesStyle}
                />
              </div>
            </div>
          )
        }
        return null;
      })}
    </div>
  )
}

const mapStateToProps = (state) => ({
  view: state.view
});

export default connect(mapStateToProps, { openNavbar, openFooter })(SingleCar);