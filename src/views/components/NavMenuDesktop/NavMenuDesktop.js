import React, { useState } from 'react';
import ButtonGreen from '../ButtonGreen/ButtonGreen';
import LogInModal from '../LogInModal/LogInModal';
import { Grid, Button, makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  button: {
    color: '#ffffff',
    fontWeight: 'bold',
    textTransform: 'none',
    height: '100%',
    borderRadius: '0',
    padding: '0 24px 0 24px'
  },  
}));

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  }
});

export default function NavMenuDesktop() {
  const classes = useStyles();

  const [modal, setModal] = useState(false);

  const handleModalOpen = () => {
    setModal(true);
  };

  const handleModalClose = () => {
    setModal(false);
  };

  return (
    <Grid>
      <ThemeProvider theme={theme}>
        <Button 
          className={classes.button}
          component={Link}
          to='/rent-a-car/vehicles' 
        >
          Araçlar
        </Button>
        <Button 
          className={classes.button} 
          component={Link}
          to='/rent-a-car/about'
        >
          Hakkımızda
        </Button>
        <Button 
          className={classes.button} 
          component={Link}
          to='/rent-a-car/contact'
        >
          İletişim
        </Button>
      </ThemeProvider>
    </Grid>
  )
}