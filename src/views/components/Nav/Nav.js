import React, { useState } from 'react';
import NavMenuDesktop from '../NavMenuDesktop/NavMenuDesktop';
import NavMenuMobile from '../NavMenuMobile/NavMenuMobile';
import BrandLink from '../BrandLink/BrandLink';
// material ui
import { AppBar, Toolbar, Grid, useMediaQuery  } from '@material-ui/core';
import { connect } from 'react-redux';

const Nav = (props) => {
  const mediaQuery = useMediaQuery('(min-width:800px)');
  const [navCheck, setNavCheck] = useState(false)

  if (props.view.navbar) {
    return (
      <div>
      <AppBar className='nav'>
        <Toolbar>
          <Grid
            container
            justify='space-between'
            className='NavContent'
          >
            <BrandLink/>
            {mediaQuery ? <NavMenuDesktop/> : <NavMenuMobile/>}
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
    )
  } else {
    return (<div></div>);
  }
}

const mapStateToProps = (state) => ({
  view: state.view
});

export default connect(mapStateToProps, { })(Nav);