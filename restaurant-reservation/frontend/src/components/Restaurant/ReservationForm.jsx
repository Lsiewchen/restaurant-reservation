import { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat'
  },
  palette: {
    primary: {
      main: "#38829ba2",
    },
    error: {
      main: "#F37021",
    },
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          backgroundColor: "white",
          paddingRight: 5,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        sizeMedium: {
          color: "black",
        },
      },
    },
  },
})

const ReservationForm = ({restaurant}) => {
  const [numPax, setNumPax] = useState('');
  const [numPaxIsEmpty, setNumPaxIsEmpty] = useState(null);
  const [reservationDate, setReservationDate] = useState(null);
  const [reservationDateIsEmpty, setReservationDateIsEmpty] = useState(null);
  const [reservationTime, setReservationTime] = useState('');
  const [reservationTimeIsEmpty, setReservationTimeIsEmpty] = useState(null);
  const [reservationTimeArray, setReservationTimeArray] = useState([]);

  const numPaxChangeHandler = (event) => (
    setNumPax(event.target.value)
  );

  useEffect(() => {
    setNumPaxIsEmpty(false)
  }, [numPax])

  const numPaxValidate = () => {
    numPax === '' ? setNumPaxIsEmpty(true) : setNumPaxIsEmpty(false);
  };

  const dateChangeHandler = (value) => (
    setReservationDate(value)
  );

  useEffect(() => {
    setReservationDateIsEmpty(false)
  }, [reservationDate]);

  const dateValidate = () => (
    reservationDate == null && setReservationDateIsEmpty(true)
  );

  const timeChangeHandler = (event) => (
    setReservationTime(event.target.value)
  );

  useEffect(() => {
    setReservationTimeIsEmpty(false)
  }, [reservationTime]);

  const timeValidate = () => (
    reservationTime == null && setReservationTimeIsEmpty(true)
  );

  const formSubmitHandler = (event) => {
    event.preventDefault();
    let reservationTime24;
    let hour = parseInt(reservationTime.split(" ")[0]);
    let ampm = reservationTime.split(" ")[1];
    if (ampm == "AM") {
      if (hour == 12) { reservationTime24 = 0; }
      else { reservationTime24 = hour; }
    }
    else if (ampm == "PM") {
      if (hour == 12) { reservationTime24 = hour; }
      else { reservationTime24 = hour + 12; }
    }
    if (numPaxIsEmpty != true && reservationDateIsEmpty != true && reservationTimeIsEmpty === false) {
      console.log(numPax);
      console.log(reservationDate);
      console.log(reservationTime24);
    }
  }

  //creates an array of 'length' and mapped (callback(element, index, array)) it, we need index so element must be ignored 
  const capacityArray = Array.from({length: 10}, (_, i) => ({label: i + 1, value: i + 1}));

  useEffect(() => {
    if (reservationDate == null) { return; }
    let time = new Array();
    let operation = restaurant.operation.filter(op => 
      op.day === dayjs(reservationDate).day()
    );
    for (let i = operation[0].openingTime; i < operation[0].closingTime; i++) {
      if (i < 12) {
        i == 0 ? time.push(12 + ' AM') : time.push(i + ' AM');
      }
      else if (i >= 12) {
        i == 12 ? time.push((i) + ' PM') : time.push((i-12) + ' PM');
      }
    }
    setReservationTimeArray(time);
  }, [reservationDate]);
  
  return (
    <ThemeProvider theme={theme}>
    <Box component="form" onSubmit={formSubmitHandler}
    sx={{ py:3, px:3, borderRadius:2, bgcolor:'#FFFFFF', display:'flex', flexDirection:'column', alignItems:'center', position:'sticky', top:130 }}>
      <Typography sx={{ width:'90%', height:56, fontSize:20, fontWeight:'medium', mb:{xs:2, sm:2, md:0} }}>Make a reservation</Typography>
      <FormControl sx={{ mb:2, width:'90%' }} >
        <InputLabel id="labelNumPax" sx={{color: numPaxIsEmpty && '#F37021'}}>Number of pax</InputLabel>
        <Select labelId="labelNumPax" label="Number of pax"
        value={numPax} onClose={numPaxValidate} onChange={numPaxChangeHandler}
        IconComponent={EmojiPeopleIcon}
        sx={{'& .MuiSelect-icon': {transform: 'none', mr:0.5, color:'black'}, 
        '& .MuiOutlinedInput-notchedOutline': {borderColor: numPaxIsEmpty && '#F37021'}}}
        >
          {capacityArray.map((option) => (
            <MenuItem key={option.value} value={option.value}> {option.label} </MenuItem>
          ))}
        </Select>
        {numPaxIsEmpty && <FormHelperText sx={{ color:'#F37021' }}>This field is required.</FormHelperText>}
      </FormControl>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker label="Date" format="DD/MM/YYYY" views={['year', 'month', 'day']}
        minDate={dayjs()} maxDate={dayjs().add(6, 'month')} // shouldDisableDate={(date) => date.day() === 0}
        value={reservationDate} onClose={dateValidate} onChange={dateChangeHandler}
        sx={{ width:'90%', mb:2, '& .MuiSelect-icon':{color:'black'} }} formatDensity="spacious"
        slotProps={{ 
          textField: {
            onKeyDown: (e) => e.preventDefault(),
            error: reservationDateIsEmpty,
            helperText: reservationDateIsEmpty && 'This field is required.',
            FormHelperTextProps: {sx: {color: '#F37021' }}
          },
          popper: { placement: "auto" }
        }}
        />
      </LocalizationProvider>
      <FormControl sx={{ mb:2, width:'90%' }} >
        <InputLabel id="labelTime" sx={{ color: reservationTimeIsEmpty && '#F37021' }}>Time</InputLabel>
        <Select labelId="labelTime" label="Time" disabled={reservationDate == null}
        value={reservationTime} onClose={timeValidate} onChange={timeChangeHandler}
        IconComponent={ScheduleIcon}
        sx={{ '& .MuiSelect-icon': {transform: 'none', mr:0.5, color:'black'},
        '& .MuiOutlinedInput-notchedOutline': {borderColor: reservationTimeIsEmpty && '#F37021'} }}
        >
          {reservationTimeArray.map((option) => (
            <MenuItem key={option} value={option}> {option} </MenuItem>
          ))}
        </Select>
        {reservationTimeIsEmpty && <FormHelperText sx={{color:'#F37021'}}>This field is required.</FormHelperText>}
      </FormControl>
      <Button sx={{ width:'90%', height:56, fontWeight:'bold', fontSize:16, backgroundColor:'#2cb2c71d',
      '&:hover': { backgroundColor: '#0099c8d4', color: '#ffffff'} }} type="submit">Book Now</Button>
    </Box>
    </ThemeProvider>
  )
}

export default ReservationForm