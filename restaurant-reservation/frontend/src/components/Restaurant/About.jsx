import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';
import '@fontsource/montserrat';

const About = ({restaurant}) => {
  const fontStyle = {
    fontSize: '13px'
  }

  const operation = restaurant.operation.map((op) => ({
    day: dayjs().day(op.day).format('dddd'),
    open: dayjs().hour(op.openingTime).format('h A'),
    close: dayjs().hour(op.closingTime).format('h A')
  }));

  return (
    <Grid container spacing={2} sx={{fontFamily: 'Montserrat', fontWeight: 500}}>
      <Grid size={12} sx={ fontStyle }>{restaurant.description}</Grid>
      <Grid size={6} sx={{ ...fontStyle, display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography variant='inherit' sx={{ pt:2, color:'#666666' }}>Location</Typography>
        <Typography variant='inherit' sx={{ whiteSpace: "pre-line" }}>{`${restaurant.streetAddress}\n#${restaurant.unitNumber}\nSingapore ${restaurant.postalCode}`}</Typography>
        <Typography variant='inherit' sx={{ pt:2, color:'#666666' }}>Cuisine</Typography>
        <Typography variant='inherit' >{restaurant.cuisine}</Typography>
      </Grid>
      <Grid size={6} sx={ fontStyle }>
        <Typography variant='inherit' sx={{ pt:2, pb:1 , color:'#666666' }}>Operating Hours</Typography>
        {operation.map((op, index) => (
          <Box key={index} sx={{ gap: { xs: 0, sm: 2 }, display:'flex', flexDirection:{ xs: 'column', sm: 'row' }}}>
            <Typography variant='inherit' sx={{width: 80}} >{op.day}</Typography>
            <Typography variant='inherit'>{op.open} - {op.close}</Typography>
          </Box>
        ))}
      </Grid>
    </Grid>
  )
}

export default About