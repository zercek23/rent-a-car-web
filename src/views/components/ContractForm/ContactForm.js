import React from 'react';
import ButtonGreen from '../ButtonGreen/ButtonGreen';
import { FormControl, FilledInput, InputLabel, createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  input: {
    marginBottom: '16px',
  },
  label: {
    paddingLeft: '8px',
  }
})

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#00D60F',
    },
  }
});

export default function ContactForm() {
  const classes = useStyles();

  return (
    <div className='ContactForm' >
      <ThemeProvider theme={theme} >
        <FormControl className={classes.input} >
          <InputLabel
            htmlFor='name'
            className={classes.label}
          >
            Ad Soyad
          </InputLabel>
          <FilledInput
            id='name'
          />
        </FormControl>
        <FormControl className={classes.input} >
          <InputLabel
            htmlFor='email'
            className={classes.label}
          >
            Email
          </InputLabel>
          <FilledInput
            id='email'
            type='email'
          />
        </FormControl>
        <FormControl className={classes.input} >
          <InputLabel
            htmlFor='message'
            className={classes.label}
          >
            Mesajınız
          </InputLabel>
          <FilledInput
            id='message'
            multiline
            rows={6} 
          />
        </FormControl>
      </ThemeProvider>
      <ButtonGreen
        text='Mesajı Gönder'
        style={{
          width: '150px',
          margin: '0 auto',
        }}
      />
    </div>
  )
}