import Box from '@mui/system/Box';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const Restaurant = (props) => {
  return (
    <Box sx={{ flex: "0 0 auto", width: 350 }}>
      <ImageListItem sx={{ borderRadius: 2, overflow: "hidden" }}>
        <img
          srcSet={`${props.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
          src={`${props.image}?w=248&fit=crop&auto=format`}
          alt={props.name}
          loading="lazy"
          style={{ borderRadius: "inherit" }}
        />
        <ImageListItemBar title={props.name} subtitle={props.description} />
      </ImageListItem>
    </Box>
  );
};

export default Restaurant