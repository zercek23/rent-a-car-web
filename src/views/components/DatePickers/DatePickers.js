import React from 'react';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';

export default function DatePickers(props) {
  return (
    <MuiPickersUtilsProvider 
      utils={MomentUtils}
    >
      <div className='DateInputs'>
        <DatePicker
          className={props.dateInputClass}
          variant='inline'
          disablePast={true}
          value={props.dateLower}
          onChange={props.handleDateLower}
          emptyLabel=''
          format='MM/DD/yyyy'
          inputVariant='filled'
          label='Start Date'
        />
        <p className='DateDash' style={props.dashStyle}><b>-</b></p>
        <DatePicker
          className={props.dateInputClass}
          variant='inline'
          disablePast={true}
          value={props.dateUpper}
          onChange={props.handleDateUpper}
          emptyLabel=''
          format='MM/DD/yyyy'
          inputVariant='filled'
          label='End Date'
          allowKeyboardControl={true}
        />
      </div>
    </MuiPickersUtilsProvider>
  )  
}