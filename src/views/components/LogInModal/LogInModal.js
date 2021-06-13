import React from 'react';
import ButtonGreen from '../ButtonGreen/ButtonGreen';
import { Modal, Backdrop, Fade, makeStyles, FormControl, InputLabel, FilledInput, ThemeProvider, createMuiTheme, Link, FormControlLabel, Checkbox } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '300px',
    alignItems: 'center',
    textAlign: 'center',
    padding: '16px',
    marginBottom: '20vh',
    borderRadius: '10px',
    backgroundColor: '#1d1d1d',
  },
  heading: {
    paddingBottom: '8px',
    borderBottom: '1px solid #00D60F'
  },
  input: {
    marginBottom: '16px',
  },
  check: {
    margin: '8px 68px 8px 0',
    color: '#d3d3d3',
  },
  paragraph: {

  },
  link: {
    marginLeft: '4px',
  }
}));

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#00D60F',
    },
  }
});

const handleSignUp = () => {
  console.log('Sign Up');
};

export default function LogInModal(props) {
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby='login-modal-title'
      className={classes.modal}
      open={props.open}
      onClose={props.handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.open} >
        <div
          className={classes.paper}
        >
          <h2 
            id='login-modal-title' 
            className={classes.heading}
          >
            Log In
          </h2>
          <ThemeProvider theme={theme} >
            <FormControl variant='filled' >
              <InputLabel
                htmlFor='user-email'
              >
                Email
              </InputLabel>
              <FilledInput
                className={classes.input}
                id='user-email'
                type='email'
              />
            </FormControl>
            <FormControl variant='filled' >
              <InputLabel
                htmlFor='user-password'
              >
                Password
              </InputLabel>
              <FilledInput
                //className={classes.input}
                id='user-password'
                type='password'
              />
            </FormControl>
            <FormControlLabel
              className={classes.check}
              value="remember me"
              control={<Checkbox color="primary" />}
              label="Remember Me"
              labelPlacement="end"
            />
            <ButtonGreen
              text='Log In'
              style={{
                width: '196px',
              }}
            />
            
            <p>
              Not a member?
              <Link
                className={classes.link}
                href='#'
                onClick={handleSignUp}
              >
                Sign up now
              </Link>
            </p>
          </ThemeProvider>
        </div>
      </Fade>
    </Modal>
  )
}