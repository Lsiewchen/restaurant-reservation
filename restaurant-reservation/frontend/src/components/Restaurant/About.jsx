import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';
import '@fontsource/montserrat';

const About = ({restaurant}) => {
  const fontStyle = {
    fontFamily:'Montserrat',
    fontSize: '14px',
    fontWeight: 500
  }

  restaurant.operation.sort((a, b) => a.day - b.day);
  if (restaurant.operation[0].day == 0) {
    const sunday = restaurant.operation.shift();
    restaurant.operation.push(sunday);
  }
  
  const operation = restaurant.operation.map((op) => ({
    day: dayjs().day(op.day).format('dddd'),
    open: dayjs().hour(op.openingTime).format('h A'),
    close: dayjs().hour(op.closingTime).format('h A')
  }));

  const cuisine = restaurant.cuisine.map((cs) => (cs.type)).join(', ');

  const address = (() => {
    let fullAddress = restaurant.streetAddress1;
    if (restaurant.streetAddress2 != null) {
      fullAddress = fullAddress + '\n' + restaurant.streetAddress2;
    }
    if (restaurant.unitNumber != null) {
      fullAddress = fullAddress + '\n' + restaurant.unitNumber;
    }
    fullAddress = fullAddress + '\nSingapore ' + restaurant.postalCode;
    return fullAddress;
  });

  return (
    <Grid container spacing={1.5}>
      <Grid size={12} sx={ fontStyle }>{restaurant.description}</Grid>
      <Grid size={6} sx={{ ...fontStyle, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        <Typography variant='inherit' sx={{ pt:1, color:'#909090ff' }}>Location</Typography>
        <Typography variant='inherit' sx={{ whiteSpace: "pre-line", wordBreak: 'break-word', pr:5 }}>{address()}</Typography>
        <Typography variant='inherit' sx={{ pt:1, color:'#909090ff' }}>Cuisine</Typography>
        <Typography variant='inherit' sx={{ whiteSpace: 'normal', wordBreak: 'break-word', pr:5 }}>{cuisine}</Typography>
        <Typography variant='inherit' sx={{ pt:1, color:'#909090ff' }}>Contact</Typography>
        <Typography variant='inherit'>{restaurant.phone}</Typography>
      </Grid>
      <Grid size={6} sx={ fontStyle }>
        <Typography variant='inherit' sx={{ pt:1, pb:1 , color:'#909090ff' }}>Operating Hours</Typography>
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