import React, { useEffect } from 'react';
import JumboHeader from '../../components/JumboHeader/JumboHeader';
import PopularVehicles from '../../components/PopularVehicles/PopularVehicles';
import MemberOffers from '../../components/MemberOffers/MemberOffers';
import PopularLocations from '../../components/PopularLocations/PopularLocations';

import { connect } from 'react-redux';
import { openNavbar, openFooter } from '../../../store/actions/viewActions';

const Home = (props) => {
  useEffect(() => {
    props.openNavbar();
    props.openFooter();
  }, [])
  return (
    <>
      <JumboHeader/>
      <PopularVehicles/>
      <MemberOffers/>
      <PopularLocations/>
    </>
  )
}

const mapStateToProps = (state) => ({
  view: state.view
});

export default connect(mapStateToProps, { openNavbar, openFooter })(Home);