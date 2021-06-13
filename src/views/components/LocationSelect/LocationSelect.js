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
        Konum
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
        <option value='İstanbul'>İstanbul</option>
        <option value='Ankara'>Ankara</option>
        <option value='İzmir'>İzmir</option>
      </Select>
    </FormControl>
  )
}