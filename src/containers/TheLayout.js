import React, { useEffect } from 'react';
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'

import { connect } from 'react-redux';
import { closeNavbar, closeFooter } from '../store/actions/viewActions';

const TheLayout = (props) => {

  useEffect(() => {
    props.closeNavbar();
    props.closeFooter();
  }, [])

  return (
    <div className="c-app c-default-layout">
      <TheSidebar/>
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body">
          <TheContent/>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  view: state.view
});

export default connect(mapStateToProps, { closeNavbar, closeFooter })(TheLayout);
