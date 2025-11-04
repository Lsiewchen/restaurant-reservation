import Box from '@mui/system/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Typography from '@mui/material/Typography';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const NewRestaurants = (props) => {
    const restListWithPos = [];
    restListWithPos[0] = props.newRests[0];
    restListWithPos[0].rows = 2;
    restListWithPos[0].cols = 3;

    return (
        <Box sx={{ pt: 5, px: { xs: 2, sm: 5, md: 10, lg: 20 } }}>
            <Typography sx={{ fontFamily: 'Momo Trust Sans', fontSize: 23 }}>New & Hot</Typography>
            <ImageList
            variant="quilted"
            cols={5}
            rowHeight={150}
            padding-bottom={0}
            >
                {props.newRests.map((rest) => (
                    <ImageListItem key={rest.rtId} cols={rest.cols || 1} rows={rest.rows || 1}>
                        <img
                            {...srcset(rest.restaurantImage, 100, rest.rows, rest.cols)}
                            alt={rest.name}
                            loading="lazy"
                        />
                        <ImageListItemBar
                        title={rest.name}
                        subtitle={rest.description}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}

export default NewRestaurants