import React, { useRef, useEffect } from 'react';
import FormFilter from '../FormFilter/FormFilter';
import { gsap } from 'gsap';

export default function JumboHeader() {
  const jumboParallel = useRef();
  const jumboContent = useRef();

  useEffect(() => {
    gsap.fromTo(jumboParallel.current, {
      scaleY: 0,
      backgroundPositionY: '-100%',
    }, {
      //transformOrigin: 'bottom right',
      scaleY: 1,
      delay: 0.75,
      duration: 1,
      ease: 'expo',
    });
  }, [jumboParallel]);

  useEffect(() => {
    gsap.from(jumboContent.current, {
      opacity: 0,
      delay: 1.5,
      duration: 0.5,
    });
  }, [jumboContent]);

  return(
    <div className='JumboHeader top-offset'> 
      <div className="JumboImg">
        <div 
          className="JumboParallel"
          ref={jumboParallel}
        >
          <div 
            className="JumboContent"
            ref={jumboContent}
          >
            <h1 className='JumboHeadingText'>
              Kolay Araç Kiralama Servisi
            </h1>
            <FormFilter/>
          </div>
        </div>
      </div>
    </div> 
  )
}