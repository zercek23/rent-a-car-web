import React from 'react';
import 'flickity/dist/flickity.min.css';
import Flickity from 'react-flickity-component';

//data-flickity='{"wrapAround": true, "initialIndex": 2, "pageDots": false}'

const flickityOptions = {
  wrapAround: true, 
  initialIndex: 2, 
  pageDots: false
}

export default function PopularLocations() {
  return (
    <div className='top-offset section'>
      <div className='section-heading'>
        <h2>Şubelerimiz</h2>
        <div className='HeadingUnderline'></div>
      </div>
      <Flickity
        className='LocationsGallery'
        options={flickityOptions}
      >
        <div className='LocationsGalleryItem istanbul'>
          <h3>İstanbul</h3>
        </div>
        <div className='LocationsGalleryItem ankara'>
          <h3>Ankara</h3>
        </div>
        <div className='LocationsGalleryItem izmir'>
          <h3>İzmir</h3>
        </div>
      </Flickity>
    </div>
  )
}