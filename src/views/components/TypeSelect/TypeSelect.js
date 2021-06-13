import React from 'react';
import { FormControl, InputLabel, Select } from '@material-ui/core';

export default function TypeSelect(props) {
  //const classes = useStyles();
  const carTypes = ["Otomobil","SUV","Motosiklet","Minivan","Ticari Araçlar","Kiralık Araçlar","Deniz Araçları","Hasarlı Araçlar","Klasik Araçlar","Modifiye Araçlar","Hava Araçları","ATV","UTV"]


  return (
    <FormControl className={props.formControl}>
      <InputLabel 
        htmlFor='type'
        classes={{
          root: props.labelRoot,
          focused: props.labelFocused,
        }}
      >
      Araç Tipi
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

        {carTypes.map((item)=>{
          return (
            <option value={item}>{item}</option>
          )
        })}
        
      </Select>
    </FormControl>
  )
}