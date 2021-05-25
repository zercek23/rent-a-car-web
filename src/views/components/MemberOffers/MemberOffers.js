import React from 'react';
import diamondIcn from '../../../assets/icons/diamond.jpg';
import emailIcn from '../../../assets/icons/email.jpg';
import tagIcn from '../../../assets/icons/tag.jpg';


export default function MemberOffers () {
  return (
    <div className='MemberOffers top-offset'>
      <div className='MemberOffers-wrapper'>
        <div className='MemberOffers-card'>
          <img 
            src={tagIcn} 
            alt='price tag icon'
            className='MemberOffers-card-icn'
          />
          <h4>Weekend Special</h4>
          <p>Get Weekend Special rates at <br/>participating locations.</p>
        </div>
        <div className='MemberOffers-card'>
          <img 
            src={emailIcn} 
            alt='price tag icon'
            className='MemberOffers-card-icn'
          />
          <h4>Special Offers</h4>
          <p>Don't miss our special offers by<br/>joining our mailing list. </p>
        </div>
        <div className='MemberOffers-card'>
          <img 
            src={diamondIcn} 
            alt='price tag icon'
            className='MemberOffers-card-icn diamond'
          />
          <h4>Get premium today!</h4>
          <p>Earn points toward free rentals.</p>
        </div>
      </div>
    </div>
  );
}