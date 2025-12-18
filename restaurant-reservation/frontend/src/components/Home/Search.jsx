import { Fragment } from 'react';
import { Link } from "react-router";
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Typography from '@mui/material/Typography';

const Search = ({restMatch}) => {
  return (
    <Fragment>
      <Typography sx={{ py:2, px: { xs: 2, sm: 5, md: 10, lg: 25, xl:40 }, fontSize:25 }}>Matching Results</Typography>
      <Grid container spacing={3} sx={{ py:2, px: { xs: 2, sm: 5, md: 10, lg: 25, xl:40 } }}>
        {restMatch.map((rt) => (
          <Grid key={rt.rtId} item size={{ xs:12, sm:6, md:4, lg:4, xl:3 }}>
            <Box sx={{ flex: "0 0 auto", width: 280 }}>
              <ImageListItem sx={{ borderRadius: 2, overflow: "hidden" }} component={Link} to={`/restaurant/${rt.rtId}`}>
                <img
                  srcSet={`${rt.imageUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${rt.imageUrl}?w=248&fit=crop&auto=format`}
                  alt={rt.name}
                  loading="lazy"
                  style={{ height:180, borderRadius: "inherit", objectFit: 'cover', objectPosition:'center' }}
                />
                <ImageListItemBar title={rt.name} subtitle={rt.intro} 
                  sx={{ '&:hover .MuiImageListItemBar-title':{ whiteSpace: 'normal', overflow: 'visible' },
                  '&:hover .MuiImageListItemBar-subtitle':{ whiteSpace: 'normal', overflow: 'visible', } }}
                />
              </ImageListItem>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
}

export default Search