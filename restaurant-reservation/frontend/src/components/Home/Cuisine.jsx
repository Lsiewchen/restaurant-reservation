import Box from '@mui/system/Box';
import Restaurant from './Restaurant.jsx'
import '@fontsource/montserrat/300';

const Cuisine = ({rest}) => {
  return (
    <Box sx={{ display: 'flex', overflowX: 'auto', gap: 1 }}>
      {rest.map((rt) => (
        <Restaurant key={rt.rtId} rest={rt} />
      ))}
    </Box>
  )
}

export default Cuisine