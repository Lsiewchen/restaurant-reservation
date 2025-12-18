import { useNavigate } from 'react-router-dom';
import { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from "axios";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import RestaurantGallery from './RestaurantGallery.jsx'
import InfoTab from './InfoTab.jsx'
import ReservationForm from './ReservationForm.jsx'
import Typography from "@mui/material/Typography";

const Restaurant = () => {
  const[restaurant, setRestaurant] = useState(null);
  const[error, setError] = useState('');
  const {rtId} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/restaurant/${rtId}`)
    .then((response) => { setRestaurant(response.data); })
    .catch((e) => { setError(e.response.data); });
  }, []);

  useEffect(() => {
    if (error != '') {
      const timerId = setTimeout(() => {
        navigate("/home");
      }, 2000);
      return () => { clearTimeout(timerId); }
    }
  }, [error]);

  return (
    <Box sx={{ py:3, px: { xs: 2, sm: 5, md: 8, lg: 15 }, gap:2, display: 'flex', flexDirection: 'row', justifyContent:'center' }}>
    {error != '' ?
      (<Typography sx={{ textAlign:'center', alignContent:'center', fontSize:16, borderStyle:'solid', borderColor:'#c4c4c4ff', width:'65%', height:80, whiteSpace: "pre-line" }}>
        {`${error} Redirecting... `}
      </Typography>)
      :
      (restaurant != null && (
        <Fragment>
        <Stack spacing={2} sx={{ bgcolor:'#FFFFFF', py:3, px:3, width:'65%', borderRadius: 2 }}>
          <RestaurantGallery restaurant={restaurant}/>
          <InfoTab restaurant={restaurant}/>
        </Stack>
        <Box sx={{ width:'35%' }}>
          <ReservationForm restaurant={restaurant}/>
        </Box>
        </Fragment>
      ))
    }
    </Box>
  )
}

export default Restaurant