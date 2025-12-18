import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '@fontsource/montserrat/500';

const RestaurantGallery = ({restaurant}) => {
    // const gallery = restaurant.restaurantImage.filter(im => im.imageType.itId != 3);

    return (
        <Box sx={{ borderRadius: 2 }}>
            <Typography sx={{ pb: 2, fontSize: 25 }}>{restaurant.name}</Typography>
            <Carousel>
              {restaurant.restaurantImage.map((image) => (
                <Carousel.Item key={image.iId} interval={3000}>
                  <img className="d-block w-100" src={image.imageUrl}/>
                </Carousel.Item>
              ))}
            </Carousel>
        </Box>
    )
}

export default RestaurantGallery