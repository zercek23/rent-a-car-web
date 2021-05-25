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
        <h2>Popular Locations</h2>
        <div className='HeadingUnderline'></div>
      </div>
      <Flickity
        className='LocationsGallery'
        options={flickityOptions}
      >
        <div className='LocationsGalleryItem denver'>
          <h3>Denver</h3>
        </div>
        <div className='LocationsGalleryItem nyc'>
          <h3>New York</h3>
        </div>
        <div className='LocationsGalleryItem orlando'>
          <h3>Orlando</h3>
        </div>
        <div className='LocationsGalleryItem vegas'>
          <h3>Las Vegas</h3>
        </div>
        <div className='LocationsGalleryItem  la'>
          <h3>Los Angeles</h3>
        </div>
        <div className='LocationsGalleryItem raleigh'>
          <h3>Raleigh</h3>
        </div>
        <div className='LocationsGalleryItem chicago'>
          <h3>Chicago</h3>
        </div>
      </Flickity>
    </div>
  )
}