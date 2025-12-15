import { useState } from 'react';
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
      main: "#F37021"
    }
  }
})

const reservation = [
  {
    rsId: 1,
    rtName: 'Restaurant1',
    rtCoverImageUrl: 'https://static.chope.co/uploads/2017/11/s-700x350x70xw_HC_Crab_Holy_jpg_1510194779.jpg?date=20251013',
    pax: 3,
    date: 'nov20,2025',
    time: 12,
    customer: '',
    restaurant: 1,
    status: 'attended'
  },
  {
    rsId: 2,
    rtName: 'Restaurant2',
    rtCoverImageUrl: 'https://static.chope.co/uploads/2017/11/s-700x350x70xw_HC_Crab_Holy_jpg_1510194779.jpg?date=20251013',
    pax: 8,
    date: 'dec31,2025',
    time: 18,
    customer: '',
    restaurant: 1,
    status: 'upcoming'
  },
    {
    rsId: 3,
    rtName: 'Restaurant3',
    rtCoverImageUrl: 'https://static.chope.co/uploads/2017/11/s-700x350x70xw_HC_Crab_Holy_jpg_1510194779.jpg?date=20251013',
    pax: 8,
    date: 'dec25,2025',
    time: 19,
    customer: '',
    restaurant: 1,
    status: 'upcoming'
  }
]

const Reservation = () => {

  const [tab, setTab] = useState('Upcoming');

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Stack direction="column" sx={{ justifyContent:"flex-start", alignItems:"center" }}>
      <ThemeProvider theme={theme}>
      <Typography sx={{ py:2, fontWeight:'bold', fontSize:20 }}>Reservation</Typography>
      <Box sx={{ typography: 'body1', px:1, py:1, width:{xs:600, sm:700}, borderRadius:3, bgcolor:'#FFFFFF' }}>
        <TabContext value={tab}>
          <Box sx={{ display:'flex' }}>
            <TabList onChange={handleChange} orientation='vertical' sx={{ width:'15%' }}>
              <Tab label="Upcoming" value="Upcoming" />
              <Tab label="Past" value="Past" />
            </TabList>
            <Box sx={{width:'85%'}}>
              <TabPanel value="Upcoming" sx={{ py:0.5 }}>
                <Stack direction="column" spacing={1} sx={{ px:1, py:1, width:'100%', borderRadius:3, bgcolor:'#FFFFFF' }}>
                  {reservation.filter(rs => rs.status === 'upcoming').map((rs) => (
                    <ReservationDetails key={rs.rsId} reservation={rs} attended={false}/>
                  ))}
              </Stack>
              </TabPanel>
              <TabPanel value="Past" sx={{ py:0.5 }}>
                <Stack direction="column" spacing={1} sx={{ px:1, py:1, width:'100%', borderRadius:3, bgcolor:'#FFFFFF', opacity: 0.5 }}>
                  {reservation.filter(rs => rs.status === 'attended').map((rs) => (
                    <ReservationDetails key={rs.rsId} reservation={rs} attended={true}/>
                  ))}
                </Stack>
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