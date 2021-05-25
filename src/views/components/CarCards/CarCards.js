import React, { useEffect, useRef } from 'react';
import VehicleCard from '../VehicleCard/VehicleCard';
import { gsap } from 'gsap';

export default function CarCards(props) {
  let cardsContainer = useRef();

  useEffect(() => {
    gsap.to(cardsContainer.current, {
      opacity: 1,
      delay: 0.3,
    });
  }, [cardsContainer]);

  return (
    <div 
      className="CarCards"
      style={{
        ...props.style,
        opacity: 0,
      }}
      ref={cardsContainer}
    >
      {props.cars.map((car, index) => {
        if (index >= props.minIndex && index <= props.maxIndex) {
          return <VehicleCard 
            key={car.id}
            carId={car.id}
            name={car.name}
            image={car.images[0]}
            seats={car.seats}
            mpg={car.mpg}
            price={car.price}
          />
        }
        return null;
      })}
    </div>
  )
}