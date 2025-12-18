import { useState, useEffect, useReducer } from 'react';
import axios from "axios";
import toast from 'react-hot-toast';
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
});

const paxInitState =  { pax: '', isEmpty: null };
const paxReducerFunc = (prevState, action) => {
  if (action.type === 'PAX_SELECTED') {
    return { pax: action.val, isEmpty: false };
  }
  if (action.type === 'PAX_FIELD_VALIDATE') {
    return { pax: prevState.pax, isEmpty: prevState.pax === '' };
  }
  if (action.type === 'PAX_RESET') {
    return { pax: '', isEmpty: null };
  }
};

const dateInitState = { date: null, isEmpty: null };
const dateReducerFunc = (prevState, action) => {
  if (action.type === 'DATE_FIELD_SELECTED') {
    return { date: action.val, isEmpty: false };
  }
  if (action.type === 'DATE_FIELD_VALIDATE') {
    return { date: prevState.date, isEmpty: prevState.date === null ? true : prevState.isEmpty };
  }
  if (action.type === 'DATE_RESET') {
    return { date: null, isEmpty: null };
  }
};

const timeInitState = { time: '', isEmpty: null };
const timeReducerFunc = (prevState, action) => {
  if (action.type === 'TIME_FIELD_SELECTED') {
    return { time: action.val, isEmpty: false };
  }
  if (action.type === 'TIME_FIELD_VALIDATE') {
    return { time: prevState.time, isEmpty: prevState.time === '' ? true : prevState.isEmpty };
  }
  if (action.type === 'TIME_RESET') {
    return { time: '', isEmpty: null };
  }
};

const ReservationForm = ({restaurant}) => {
  const [paxState, dispatchPax] = useReducer(paxReducerFunc, paxInitState);
  const [dateState, dispatchDate] = useReducer(dateReducerFunc, dateInitState);
  const [timeState, dispatchTime] = useReducer(timeReducerFunc, timeInitState);
  const [timeArray, setTimeArray] = useState([]);

  const numPaxChangeHandler = (event) => (
    dispatchPax({ type: 'PAX_SELECTED', val: event.target.value })
  );

  const numPaxValidate = () => (
    dispatchPax({ type: 'PAX_FIELD_VALIDATE' })
  );

  const dateChangeHandler = (value) => (
    dispatchDate({ type: 'DATE_FIELD_SELECTED', val: value})
  );

  const dateValidate = () => (
    dispatchDate({ type: 'DATE_FIELD_VALIDATE' })
  );

  const timeChangeHandler = (event) => (
    dispatchTime({ type: 'TIME_FIELD_SELECTED', val: event.target.value })
  );

  const timeValidate = () => (
    dispatchTime({ type: 'TIME_FIELD_VALIDATE' })
  );

  const formSubmitHandler = (event) => {
    event.preventDefault();
    numPaxValidate();
    dateValidate();
    timeValidate();

    let dateString;
    if (!dateState.isEmpty) {
      dateString = dayjs(dateState.date).format('YYYY-MM-DD');
    }
   
    let reservationTime24;
    if (!timeState.isEmpty) {
      let hour = parseInt(timeState.time.split(" ")[0]);
      let ampm = timeState.time.split(" ")[1];
      if (ampm == "AM") {
        if (hour == 12) { reservationTime24 = 0; }
        else { reservationTime24 = hour; }
      }
      else if (ampm == "PM") {
        if (hour == 12) { reservationTime24 = hour; }
        else { reservationTime24 = hour + 12; }
      }
    }
    
    if (!paxState.isEmpty && dateString != undefined && reservationTime24 != undefined) {
      const reservation = {
        "rtId": restaurant.rtId,
        "pax": paxState.pax,
        "date": dateString,
        "time": reservationTime24
      }
      axios.post("http://localhost:8080/reservation/create", reservation)
      .then((response) => {
        dispatchPax({ type: 'PAX_RESET' });
        dispatchDate({ type: 'DATE_RESET' });
        dispatchTime({ type: 'TIME_RESET' });
        toast.success(response.data);
      })
      .catch((e) => {
        toast.error(e.response.data, {style: { maxWidth:500, width:500 }})
      })
    }
  }

//generate pax with a range of 1-10
//creates an array of 'length' and mapped (callback(element, index, array)) it, we need index so element must be ignored 
  const capacityArray = Array.from({length: 10}, (_, i) => ({label: i + 1, value: i + 1}));

//generate day to block out based on operation day
  const dayNotOperating = () => {
    const allDays = [0, 1, 2, 3, 4, 5, 6];
    const operationDays = restaurant.operation.map(op => op.day);
    const dayNotOperating = allDays.filter((day) => (!operationDays.includes(day)));
    return dayNotOperating;
  }
  
//generate time based on day  
  useEffect(() => {
    if (dateState.date == null) { return; }
    let time = new Array();
    let operation = restaurant.operation.filter(op => 
      op.day === dayjs(dateState.date).day()
    );
    let closingTime = operation[0].closingTime == 0 ? 24 : operation[0].closingTime;
    for (let i = operation[0].openingTime; i < closingTime; i++) {
      if (i < 12) {
        i == 0 ? time.push(12 + ' AM') : time.push(i + ' AM');
      }
      else if (i >= 12) {
        i == 12 ? time.push((i) + ' PM') : time.push((i-12) + ' PM');
      }
    }
    setTimeArray(time);
  }, [dateState.date]);
  
  return (
    <ThemeProvider theme={theme}>
    <Box component="form" onSubmit={formSubmitHandler}
    sx={{ py:3, px:3, borderRadius:2, bgcolor:'#FFFFFF', display:'flex', flexDirection:'column', alignItems:'center', position:'sticky', top:90 }}>
      <Typography sx={{ width:'90%', height:56, fontSize:20, fontWeight:'medium', mb:{xs:2, sm:2, md:0} }}>Make a reservation</Typography>
{/* pax */}
      <FormControl sx={{ mb:2, width:'90%' }} >
        <InputLabel id="labelNumPax" sx={{color: paxState.isEmpty && '#F37021'}}>Number of pax</InputLabel>
        <Select labelId="labelNumPax" label="Number of pax"
        value={paxState.pax} onClose={numPaxValidate} onChange={numPaxChangeHandler}
        IconComponent={EmojiPeopleIcon}
        sx={{'& .MuiSelect-icon': {transform: 'none', mr:0.5, color:'black'}, 
        '& .MuiOutlinedInput-notchedOutline': {borderColor: paxState.isEmpty && '#F37021'} }}
        >
          {capacityArray.map((option) => (
            <MenuItem key={option.value} value={option.value}> {option.label} </MenuItem>
          ))}
        </Select>
        {paxState.isEmpty && <FormHelperText sx={{ color:'#F37021' }}>This field is required.<br/>*Over 10 guests? Contact the restaurant.</FormHelperText>}
      </FormControl>
{/* date */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker label="Date" format="DD/MM/YYYY" views={['year', 'month', 'day']}
        minDate={dayjs()} maxDate={dayjs().add(6, 'month')} shouldDisableDate={(date) => dayNotOperating().includes(date.day())}
        value={dateState.date} onClose={dateValidate} onChange={dateChangeHandler}
        sx={{ width:'90%', mb:2, '& .MuiSelect-icon':{color:'black'} }} formatDensity="spacious"
        slotProps={{ 
          textField: {
            onKeyDown: (e) => e.preventDefault(),
            error: dateState.isEmpty,
            helperText: dateState.isEmpty && 'This field is required.',
            FormHelperTextProps: {sx: {color: '#F37021' }}
          },
          popper: { placement: "auto" }
        }}
        />
      </LocalizationProvider>
{/* time */}
      <FormControl sx={{ mb:2, width:'90%' }} >
        <InputLabel id="labelTime" sx={{ color: timeState.isEmpty && '#F37021' }}>Time</InputLabel>
        <Select labelId="labelTime" label="Time" disabled={dateState.date == null}
        value={timeState.time} onClose={timeValidate} onChange={timeChangeHandler}
        IconComponent={ScheduleIcon}
        sx={{ '& .MuiSelect-icon': {transform: 'none', mr:0.5, color:'black'},
        '& .MuiOutlinedInput-notchedOutline': {borderColor: timeState.isEmpty && '#F37021'},
        '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {borderColor: timeState.isEmpty && '#F37021'} }}
        >
          {timeArray.map((option) => (
            <MenuItem key={option} value={option}> {option} </MenuItem>
          ))}
        </Select>
        {timeState.isEmpty && <FormHelperText sx={{color:'#F37021'}}>This field is required.</FormHelperText>}
      </FormControl>
      <Button sx={{ width:'90%', height:56, fontWeight:'bold', fontSize:16, backgroundColor:'#2cb2c71d',
      '&:hover': { backgroundColor: '#0099c8d4', color: '#ffffff'} }} type="submit">Book Now</Button>
    </Box>
    </ThemeProvider>
  )
}

export default ReservationForm