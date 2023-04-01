import * as React from 'react';
import {LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DateCalendar} from '@mui/x-date-pickers/DateCalendar';
import {useState} from 'react';

export const BasicDateCalendar = () => {
  const [date, setDate] = useState(null);

  const handleOnChange = value => {
    console.log(value);
    setDate(value);
  };

  return (
    <div style={{display: 'flex', justifyContent: "center"}}>
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            value={date}
            onChange={newValue => handleOnChange(newValue)}
          />
        </LocalizationProvider>
      </div>
      <ul>
        {[0, 1, 2].map(el => (
          <li key={el} onClick={(e) => console.log(e.target.innerHTML)}>{`${el} test hour selection`}</li>
        ))}
      </ul>
    </div>
  );
};
