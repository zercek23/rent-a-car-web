import React from 'react';
import { FormControl, InputLabel, Select } from '@material-ui/core';

export default function TypeSelect(props) {
  //const classes = useStyles();

  return (
    <FormControl className={props.formControl}>
      <InputLabel 
        htmlFor='type'
        classes={{
          root: props.labelRoot,
          focused: props.labelFocused,
        }}
      >
      Car Type
      </InputLabel>
      <Select
        native
        id='type'
        name='type'
        variant='filled'
        value={props.type}
        onChange={props.handleType}
        classes={{
          root: props.rootSelect,
        }}
      >
        <option aria-label='None' value=''/>
        <option value='Coupe'>Coupe</option>
        <option value='Convertable'>Convertable</option>
        <option value='Mini Van'>Mini Van</option>
        <option value='Sedan'>Sedan</option>
        <option value='SUV'>SUV</option>
        <option value='Truck'>Truck</option>
      </Select>
    </FormControl>
  )
}