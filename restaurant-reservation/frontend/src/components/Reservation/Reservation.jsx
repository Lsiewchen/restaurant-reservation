import { useState, useEffect } from 'react';
import axios from "axios";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ReservationDetails from './ReservationDetails.jsx';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import '@fontsource/montserrat/800';

const theme = createTheme ({
  palette: {
    primary: {
      main: "#F37021",
    }
  }
})

const Reservation = () => {
  const [tab, setTab] = useState('Upcoming');
  const [activeReservation, setActiveReservation] = useState([]);
  const [inactiveReservation, setInactiveReservation] = useState([]);
  const [cancelCount, setCancelCount] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:8080/reservation/all")
    .then((response) => {
      let reservation = response.data;
      const active = reservation.filter((rs) => (rs.statusType == "active"));
      setActiveReservation(active);
      const inactive = reservation.filter((rs) => (rs.statusType != "active" && rs.statusType != "canceled"));
      setInactiveReservation(inactive);
    })
    .catch((e) => { console.log("Failed to load reservation."); })
  }, [cancelCount]);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  const cancelReservation = () => (setCancelCount(prev => prev + 1));

  return (
    <Stack direction="column" sx={{ justifyContent:"flex-start", alignItems:"center" }}>
      <ThemeProvider theme={theme}>
      <Typography sx={{ py:2, fontFamily:'Montserrat', fontWeight:'bold', fontSize:24 }}>Reservation</Typography>
      <Box sx={{ typography: 'body1', px:1, py:1, width:{xs:600, sm:700}, borderRadius:3, bgcolor:'#FFFFFF' }}>
        <TabContext value={tab}>
          <Box sx={{ display:'flex' }}>
            <TabList onChange={handleChange} orientation='vertical' sx={{ width:'15%' }}>
              <Tab label="Upcoming" value="Upcoming" />
              <Tab label="Past" value="Past" />
            </TabList>
            <Box sx={{width:'85%'}}>
              <TabPanel value="Upcoming" sx={{ py:0.5 }}>
                {activeReservation.length > 0 ?
                  <Stack direction="column" spacing={1} sx={{ px:1, py:1, width:'100%', borderRadius:3, bgcolor:'#FFFFFF' }}>
                    {activeReservation.map((rs) => (
                      <ReservationDetails key={rs.rsId} reservation={rs} attended={false} cancelReservation={cancelReservation}/>
                    ))}
                  </Stack>
                  : <Typography align="center" sx={{ fontFamily:'Montserrat', color:'#909090ff' }}>You have no upcoming reservations.</Typography>
                }
              </TabPanel>
              <TabPanel value="Past" sx={{ py:0.5 }}>
                {inactiveReservation.length > 0 ?
                  <Stack direction="column" spacing={1} sx={{ px:1, py:1, width:'100%', borderRadius:3, bgcolor:'#FFFFFF', opacity: 0.5 }}>
                    {inactiveReservation.map((rs) => (
                      <ReservationDetails key={rs.rsId} reservation={rs} attended={true}/>
                    ))}
                  </Stack>
                  : <Typography align="center" sx={{ fontFamily:'Montserrat', color:'#909090ff' }}>You have no past reservations.</Typography>
                }
              </TabPanel>
            </Box>
          </Box>
        </TabContext>
      </Box>
      </ThemeProvider>
    </Stack>
  );
}

export default Reservation