import React, {useEffect} from 'react';
import ContactForm from '../../components/ContractForm/ContactForm';
import contactImg from  '../../../assets/imgs/telefon.png';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import StayCurrentPortraitOutlinedIcon from '@material-ui/icons/StayCurrentPortraitOutlined';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

import { connect } from 'react-redux';
import { openNavbar, openFooter } from '../../../store/actions/viewActions';
 
const Contact = (props) => {

  useEffect(() => {
    props.openNavbar();
    props.openFooter();
  }, [])

  return (
    <div className='top-offset Contact'>
      <header className='ContactHeader' >
        <img 
          src={contactImg} 
          style={{maxWidth: '500px'}}
          alt='contact' 
          className='ContactHeaderImg'
        />
        <div className='ContactDetails  box-shadow' >
          <h1>İletişim Bilgileri</h1>
          <div>
            <StayCurrentPortraitOutlinedIcon className='DetailsIcon' />
            <p>0555 555 55 55</p>
          </div>
          <div>
            <EmailOutlinedIcon className='DetailsIcon' />
            <p>mail@rentacar.com</p>
          </div>
          <div>
            <LocationOnOutlinedIcon className='DetailsIcon' />
            <p>Serdivan/Sakarya</p>
          </div>
        </div>
      </header>
      <div className='ContactFormContainer   box-shadow' >
        <div className='ContactFormContainerH3' >
          <h3>Bize Ulaşın</h3>
        </div>
        <ContactForm/>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  view: state.view
});

export default connect(mapStateToProps, { openNavbar, openFooter })(Contact);