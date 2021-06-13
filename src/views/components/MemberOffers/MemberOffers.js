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
          <h4>Haftasonu Fırsatı</h4>
          <p>Haftasonu fırsatlarını kaçırmayın.</p>
        </div>
        <div className='MemberOffers-card'>
          <img 
            src={emailIcn} 
            alt='price tag icon'
            className='MemberOffers-card-icn'
          />
          <h4>Özel  Fırsatlar</h4>
          <p>Özel  fırsatlar kaçırmayın.</p>
        </div>
        <div className='MemberOffers-card'>
          <img 
            src={diamondIcn} 
            alt='price tag icon'
            className='MemberOffers-card-icn diamond'
          />
          <h4>Hemen Kiralayın</h4>
          <p>Tek tıkla kolay kiralama.</p>
        </div>
      </div>
    </div>
  );
}