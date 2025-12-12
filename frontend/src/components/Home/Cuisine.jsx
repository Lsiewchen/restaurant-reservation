import Box from '@mui/system/Box';
import Restaurant from './Restaurant.jsx'
import Typography from '@mui/material/Typography';
import '@fontsource/montserrat/300';

const Cuisine = (props) => {
  return (
    <Box sx={{ py: 1, px: { xs: 2, sm: 5, md: 10, lg: 20 }, display: 'flex', flexDirection: 'column' }}>
      <Typography sx={{ py: 1, fontFamily: 'Montserrat', fontSize: 23 }}>{props.rests[0].cuisine}</Typography>
      <Box sx={{ display: 'flex', overflowX: 'auto', gap: 0.5 }}>
        {props.rests.map((rest) => (
          <Restaurant
          key = {rest.rtId}
          name = {rest.name}
          description = {rest.description}
          image = {rest.restaurantImage}
          />
        ))}
      </Box>
    </Box>
  )
}

export default Cuisine