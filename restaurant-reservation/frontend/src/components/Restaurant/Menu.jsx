import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Menu = ({restaurant}) => {  
  return (
    <Grid container spacing={4} sx={{ pt:3, pb:6 }}>
      {restaurant.restaurantMenu.map((mn) => (
        <Box key={mn.mId} sx={{ height:125, width:125 }}>
          <Card sx={{ height:'inherit', width:'inherit' }}>
            <CardActionArea href={mn.fileUrl} target="_blank" sx={{ height:'100%', width:'100%' }}>      
              <CardMedia component="img" image={mn.imageUrl} alt="Menu"
              sx={{ objectFit: 'cover', objectPosition:'center', width:'100%', height:'100%' }}
              />
            </CardActionArea>
          </Card>
          {mn.type != null && <Typography sx={{ fontSize:14 }}>{mn.type}</Typography>}
        </Box>
      ))}
    </Grid>
  )
}

export default Menu