import React, { useRef, useEffect } from 'react';
import user from '../../../assets/icons/user-silhouette.png';
import dashboard from '../../../assets/icons/dashboard.png';
import dollarSign from '../../../assets/icons/dollar-sign-symbol-bold-text.png';
import { Link } from 'react-router-dom';
import { TweenLite } from 'gsap';

export default function VehicleCard(props) {
  const vehicleCard = useRef();

  useEffect(() => {
    TweenLite.fromTo(vehicleCard.current, {
      opacity: 0,
      y: 50,
      x: 50,
    }, {
      y: 0,
      x: 0,
      opacity: 1,
      duration: 0.1,
      delay: 0.3,
      ease: 'power3',
    });
  }, [vehicleCard])

  const handleMouseEnter = () => {
    TweenLite.to(vehicleCard.current, {
      x: -2,
      y: -4,
      delay: 0.1,
      duration: 0.3,
      ease: 'power3'
    });
  }

  const handleMouseLeave = () => {
    TweenLite.to(vehicleCard.current, {
      x: 2,
      y: 4,
      delay: 0.1,
      duration: 0.3,
      ease: 'power3',
    });
  }

  return (
    <Link 
      to={`/rent-a-car/vehicles/${props.carId}`}
      className='RouterLink'
      ref={vehicleCard}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='VehicleCard' ref={vehicleCard}>
        <div>
          <h3 className='VehicleName'>{props.name}</h3>
        </div>
        <div>
          <img src={props.image} alt={props.name} style={{width: '300px'}}/>
        </div>
        <div className='VehicleSpecs'>
          <div className='VehicleSpecs-spec'>
            <img src={user} alt='user' style={{width: '20px'}}/>
            <p className='VehicleSpecs-p'>{props.seats}</p>
          </div>
          <div className='VehicleSpecs-spec'>
            <img src={dashboard} alt='dashboard' style={{width: '20px'}}/>         
            <p className='VehicleSpecs-p'>{props.mpg} km/s</p>
          </div>
          <div className='VehicleSpecs-spec'>
            <img src={dollarSign} alt='dollar sign' style={{width: '20px'}}/>        
            <p className='VehicleSpecs-p'>Günlük {props.price} TL</p>
          </div>
        </div>
      </div>
    </Link>
  )
}