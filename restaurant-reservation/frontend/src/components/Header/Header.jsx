import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchContext from '../../store/search-context.jsx'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../../images/logo.png';
import '@fontsource/montserrat/500';
import SearchBar from './SearchBar';
import ProfileMenu from './ProfileMenu';

const Header = () => {
  const navigate = useNavigate();
  const cxt = useContext(SearchContext);

  const navigateHandler = () => {
    cxt.setKeyword('');
    navigate('/home');
  };

  return (
    <Box>
      <AppBar position="fixed" sx={{ bgcolor: '#FFFFFF' }}>
        <Toolbar sx={{ height:90 }}>
            <Box onClick={navigateHandler} sx={{ width:'10%', display:'flex', justifyContent:'center', alignItems:'center' }}>
              <Box sx={{ width: 85, height: 'auto' }} component="img" src={logo} />
            </Box>
            <Box sx={{ width: '80%', height: '100%', alignItems:'center' }}>
                <Typography variant="h6" noWrap component="div" sx={{ py: 1, textAlign: 'center', fontSize: 20, color: '#000000b3' }}>
                    Discover and book restaurants
                </Typography>
                <SearchBar/>
            </Box>
            <Box sx={{ width: '10%', display:'flex', justifyContent:'center', alignItems:'center'}}>
              <ProfileMenu/>
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header
