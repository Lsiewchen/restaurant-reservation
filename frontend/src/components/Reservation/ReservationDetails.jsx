import {Fragment} from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import dayjs from 'dayjs';

const theme = createTheme ( {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor:'#2cb2c71d',
          fontSize: 12,
          color: '#38829ba2',
          '&:hover': {
            backgroundColor: '#0099c8d4', 
            color: '#ffffff'
          }
        }
      }
    }
  }
})

const ReservationDetails = (props) => {
  const reservationDateTime = () => {
    const date = dayjs(props.reservation.date).format('dddd, D MMMM YYYY') + ' at ' +
                  dayjs().hour(props.reservation.time).format('h A');
    return date;
  };

  return (
    <ThemeProvider theme={theme}>
    <Stack direction="row" spacing={3} sx={{ justifyContent:"space-between", alignItems:"center" }}>
      <Box component='img' src={props.reservation.rtCoverImageUrl} sx={{ objectFit:'cover', objectPosition:'center', height:90, width:90, borderRadius:3 }}/>
      <Stack direction="column" spacing={0.5} sx={{ width:350, justifyContent:"center", alignItems: "flex-start" }}>
        <Button disableRipple sx={{ py:0, px:0, fontSize: 16, color:'#212529', backgroundColor:'#ffffff', 
          '&:hover':{ fontWeight:'bold', backgroundColor: '#ffffff', color: '#0099c8d4'} }}>{props.reservation.rtName}</Button>
        <Typography sx={{ fontSize:14 }}>{reservationDateTime()}</Typography>
        <Typography sx={{ fontSize:14 }}>Table for {props.reservation.pax}</Typography>
      </Stack>
      <Stack spacing={1} direction="column" sx={{ width:90 }}>
        {!props.attended && <Fragment>
          <Button sx={{ py:0.5, width:90 }}
          startIcon={<EditIcon sx={{mr:'0.5px'}}/>} size="small">Edit</Button>
          <Button sx={{ py:0.5, width:90 }}
          startIcon={<DeleteIcon sx={{mr:'0.5px'}}/>} size="small">Cancel</Button>
        </Fragment>}
      </Stack>
    </Stack>
    </ThemeProvider>
  );
}

export default ReservationDetails