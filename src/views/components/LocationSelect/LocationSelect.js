import React from 'react';
import { FormControl, InputLabel, Select } from '@material-ui/core';

export default function LocationSelect(props) {
  return (
    <FormControl className={props.formControl}>
      <InputLabel 
        htmlFor='location'
        classes={{
          root: props.labelRoot,
          focused: props.labelFocused,
        }}
      >
        Location
      </InputLabel>
      <Select
        id='location'
        name='location'
        variant='filled'
        native
        value={props.location}
        onChange={props.handleLocation}
        classes={{
          root: props.rootSelect,
        }}
      >
        <option aria-label='None' value=''/>
        <option value='Denver'>Denver</option>
        <option value='Las Vegas'>Las Vegas</option>
        <option value='Los Angeles'>Los Angeles</option>
        <option value='New York'>New York</option>
        <option value='Orlando'>Orlando</option>
        <option value='Raleigh'>Raleigh</option>
      </Select>
    </FormControl>
  )
}