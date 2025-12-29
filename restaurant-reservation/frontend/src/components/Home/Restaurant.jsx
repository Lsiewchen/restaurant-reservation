import { Link } from "react-router-dom";
import Box from '@mui/system/Box';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const Restaurant = ({rest}) => {
  return (
    <Box sx={{ flex: "0 0 auto", width: 280 }}>
      <ImageListItem sx={{ borderRadius: 2, overflow: "hidden" }} component={Link} to={`/restaurant/${rest.rtId}`}>
        <img
          srcSet={`${rest.imageUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
          src={`${rest.imageUrl}?w=248&fit=crop&auto=format`}
          alt={rest.name}
          loading="lazy"
          style={{ height:180, borderRadius: "inherit", objectFit: 'cover', objectPosition:'center' }}
        />
        <ImageListItemBar title={rest.name} subtitle={rest.intro} 
        sx={{ '&:hover .MuiImageListItemBar-title':{ whiteSpace: 'normal', overflow: 'visible' },
              '&:hover .MuiImageListItemBar-subtitle':{ whiteSpace: 'normal', overflow: 'visible', } }}
        />
      </ImageListItem>
    </Box>
  );
};

export default Restaurant