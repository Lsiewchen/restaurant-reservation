import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../../images/logo.png';
import '@fontsource/montserrat/500';
import SearchBar from './SearchBar';
import ProfileMenu from './ProfileMenu';

const Header = () => {
  return (
    <Box>
      <AppBar position="fixed" sx={{ bgcolor: '#FFFFFF' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', height:90 }}>
            <Box sx={{ justifyContent: 'left', width: 90, height: 'auto' }} component="img" src={logo} />
            <Box sx={{ width: '60%', height: '100%' }}>
                <Typography variant="h6" noWrap component="div"
                sx={{ py: 1, display: {xs: 'none', sm: 'block'}, textAlign: 'center', fontSize: 20, color: '#000000b3' }}
                >
                    Discover and book restaurants
                </Typography>
                <SearchBar/>
            </Box>
            <ProfileMenu/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header
