import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import dayjs from 'dayjs';

const theme = createTheme ( {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor:'#2cb2c71d',
          borderRadius: 10,
          fontSize: 12,
          color: '#38829ba2',
          '&:hover': {
            backgroundColor: '#0099c8d4', 
            color: '#ffffff'
          }
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          backgroundColor:'#2cb2c71d',
          borderRadius: 10,
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

const ReservationDetails = ({reservation, attended, cancelReservation}) => {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogClickOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const reservationDateTime = () => {
    const date = dayjs(reservation.date).format('dddd, D MMMM YYYY') + ' at ' +
                  dayjs().hour(reservation.time).format('h A');
    return date;
  };

  const cancelReservationHandler = () => {
    axios.put(`http://localhost:8080/reservation/cancel/${reservation.rsId}`)
    .then((response) => { console.log(response.data); })
    .catch((e) => { console.log(e.response.data); });
    cancelReservation();
  }

  return (
    <ThemeProvider theme={theme}>
    <Stack direction="row" spacing={3} sx={{ justifyContent:"space-between", alignItems:"center" }}>
      <Box component='img' src={reservation.imageUrl} sx={{ objectFit:'cover', objectPosition:'center', height:90, width:90, borderRadius:3 }}/>
      <Stack direction="column" spacing={0.5} sx={{ width:350, justifyContent:"center", alignItems: "flex-start" }}>
        <Button disableRipple sx={{ py:0, px:0, fontSize: 16, color:'#212529c4', backgroundColor:'#ffffff', fontWeight:'bold', 
          '&:hover':{ fontWeight:'bold', backgroundColor: '#ffffff', color: '#0099c8d4'} }} 
          onClick={() => navigate(`/restaurant/${reservation.rtId}`)}>{reservation.name}</Button>
        <Typography sx={{ fontSize:14 }}>{reservationDateTime()}</Typography>
        <Typography sx={{ fontSize:14 }}>Table for {reservation.pax}</Typography>
      </Stack>
      <Box sx={{width:50}}>
        {!attended && 
        <Fragment>
        <IconButton onClick={handleDialogClickOpen}><DeleteIcon sx={{ width:20, height:20 }}/></IconButton>
          <Dialog open={openDialog} onClose={handleDialogClose} disableScrollLock
          aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description"
          sx={{ '& .MuiPaper-root': { width: '350px', maxWidth: '100%', px:1, py:1 } }}
          >
            <DialogTitle id="alert-dialog-title" sx={{ fontFamily:'Montserrat', fontSize:18 }}> {"Are you sure you want to cancel this reservation?"} </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description" sx={{ fontFamily:'Montserrat', fontSize:14 }}>
                Once cancelled, your reserved spot will be released. You can make a new reservation later if your plans change.
              </DialogContentText>
            </DialogContent>
            <DialogActions sx={{px:3}}>
              <Button onClick={handleDialogClose}>Back</Button>
              <Button onClick={cancelReservationHandler} autoFocus>Confirm</Button>
            </DialogActions>
          </Dialog>
        </Fragment>
        }
      </Box>
      {/* <Stack spacing={1} direction="column" sx={{ width:90 }}>
        {!props.attended && <Fragment>
          <Button sx={{ py:0.5, width:90 }}
          startIcon={<EditIcon sx={{mr:'0.5px'}}/>} size="small">Edit</Button>
          <Button sx={{ py:0.5, width:90 }}
          startIcon={<DeleteIcon sx={{mr:'0.5px'}}/>} size="small">Cancel</Button>
        </Fragment>}
      </Stack> */}
    </Stack>
    </ThemeProvider>
  );
}

export default ReservationDetails