import { useParams } from 'react-router';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import RestaurantGallery from './RestaurantGallery.jsx'
import InfoTab from './InfoTab.jsx'
import ReservationForm from './ReservationForm.jsx'

const restaurant = 
{
    rtId: 1,
    name: 'Restaurant1',
    email: 'abc@gmail.com',
    phone: '87654321',
    intro: 'Michellin food',
    description: 'Be among the first to preview the launch of Salt & Soul - your latest cozy food haunt that serves up soulful, high-quality fare without the hefty price tag. Rooted in classic Western techniques and made with heart, this is food that’s both comforting and elevated. In collaboration with a chef who has worked in various Michelin restaurants, he brings his expertise to the table - literally - Salt & Soul reimagines everyday dining with gourmet flavours, crafted with the finest techniques used by masterchefs around the world.',
    capacity: 100,
    streetAddress: '65 Street',
    unitNumber: '01-05',
    postalCode: '050065',
    restaurantImage: [
      {
        imageType: 1, //cover image
        imageUrl: 'https://static.chope.co/uploads/2017/11/s-700x350x70xw_HC_Crab_Holy_jpg_1510194779.jpg?date=20251013'
      },
      {
        imageType: 2, //other image
        imageUrl: 'https://static.chope.co/uploads/2017/11/HC_Crab_Green_Chilli_jpg_1510194780.jpg?date=20251013'
      },
      {
        imageType: 2, //other image
        imageUrl: 'https://static.chope.co/uploads/2017/11/HC_Clam_Beehoon_jpg_1510194779.jpg?date=20251013'
      },
      {
        imageType: 3, //menu image
        imageUrl: 'https://static.chope.co/uploads/2017/11/Food_Menu_Updated_28_9_pdf_1510193834.pdf'
      }
    ],
    operation: [
      { // 0=sunday, 6=saturday
        rtId: 1,
        day: 1,
        openingTime: 11,
        closingTime: 21
      },
      {
        rtId: 1,
        day: 2,
        openingTime: 0,
        closingTime: 23
      },
      {
        rtId: 1,
        day: 3,
        openingTime: 11,
        closingTime: 21
      },
      {
        rtId: 1,
        day: 4,
        openingTime: 11,
        closingTime: 21
      },
      {
        rtId: 1,
        day: 5,
        openingTime: 11,
        closingTime: 23
      },
      {
        rtId: 1,
        day: 6,
        openingTime: 11,
        closingTime: 23
      },
      {
        rtId: 1,
        day: 0,
        openingTime: 11,
        closingTime: 22
      }
    ],
    cuisine: 'French, Asian, Western',
    reservation: '',
    dateCreated: 'feb1,2025'
}

const Restaurant = () => {
  const params = useParams();
  console.log(params);
    return (
        <Box sx={{ py:3, px: { xs: 2, sm: 5, md: 8, lg: 15 }, gap:2, display: 'flex', flexDirection: 'row' }}>
            <Stack spacing={2} sx={{ bgcolor:'#FFFFFF', py:3, px:3, width:'65%', borderRadius: 2 }}>
                <RestaurantGallery restaurant={restaurant}/>
                <InfoTab restaurant={restaurant}/>
            </Stack>
            <Box sx={{ bgcolor:'#FAFAFA', width:'35%' }}>
              <ReservationForm restaurant={restaurant}/>
            </Box>
        </Box>
    )
}

export default Restaurant