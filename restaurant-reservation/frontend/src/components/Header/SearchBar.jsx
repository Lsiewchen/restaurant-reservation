import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#f7f7f7ff',
  '&:hover': {
    backgroundColor: '#f1efefff',
  },
  marginRight: 'auto',
  marginLeft: 'auto',
  width: '70%',
  height: 28
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#F37021',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  height: '100%',
  fontSize: 14,
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    height: '80%',
    color: '#383838ff',
    '::placeholder': {
      color: '#6b6b6bff',
      opacity: 0.7,
    },
  },
}));

const SearchBar = () => {
  const [keyword, setKeyword] = useState('');
  const searchInputRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!location.pathname.startsWith('/home/search/')) {
      setKeyword('');
    }
  }, [location.pathname]);

  const inPutChangeHandler = (event) => {
    setKeyword(event.target.value);
  };

  const enterSearchHandler = (event) => {
    if (event.key === 'Enter') {
      navigate("/home/search/" + keyword);
      if (searchInputRef.current) {
        searchInputRef.current.blur();
      }
    }
  };

  return (
    <Search sx={{ borderRadius: 5 }}>
      <SearchIconWrapper>
        <SearchIcon/>
      </SearchIconWrapper>
      <StyledInputBase
        value={keyword}
        inputRef={searchInputRef}
        onChange={inPutChangeHandler}
        onKeyDown={enterSearchHandler}
        placeholder="Search for something yummy"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  )
}

export default SearchBar