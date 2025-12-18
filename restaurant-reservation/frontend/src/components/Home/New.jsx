import { Link } from "react-router";
import Box from "@mui/system/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Typography from "@mui/material/Typography";
import "@fontsource/montserrat/300";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const New = ({restNew}) => {
  const restListWithPos = restNew.map((rest, index) => 
    index == 0 ? {...rest, rows:2, cols:2} : rest
  );

  return (
    <Box sx={{ pt:1, px: { xs: 2, sm: 5, md: 10, lg: 20, xl:40 } }}>
      <Typography sx={{ fontFamily: "Montserrat", fontSize: 23, py:1 }}>New & Hot</Typography>
      <ImageList variant="quilted" cols={4} rowHeight={150} gap={7}>
        {restListWithPos.map((rt) => (
          <ImageListItem key={rt.rtId} component={Link} to={`/restaurant/${rt.rtId}`}
          cols={rt.cols || 1} rows={rt.rows || 1} sx={{ borderRadius: 2, overflow: "hidden" }}
          >
            <img {...srcset(rt.imageUrl, 100, rt.rows, rt.cols)}
            alt={rt.name}
            loading="lazy"
            style={{ borderRadius: "inherit", display: 'block', height: '100%', width: '100%', objectFit: 'cover', objectPosition:'center' }}
            />
            <ImageListItemBar title={rt.name} subtitle={rt.intro}
            sx={{ '&:hover .MuiImageListItemBar-title':{ whiteSpace: 'normal', overflow: 'visible' },
                  '&:hover .MuiImageListItemBar-subtitle':{ whiteSpace: 'normal', overflow: 'visible', } }}  
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default New;
