import Box from '@mui/material/Box';

const Menu = ({restaurant}) => {
  const menus = restaurant.restaurantImage.filter(im => im.imageType == 3);
  
  return (
    <Box>
      {menus.map((im, index) => (
        <a href={im.imageUrl} key={index} alt="menu">menu</a>
      ))}
    </Box>
  )
}

export default Menu