import { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import SearchContext from '../../store/search-context.jsx'
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
  const searchInputRef = useRef(null);
  const navigate = useNavigate();
  const cxt = useContext(SearchContext);

  const inPutChangeHandler = (event) => {
    console.log(event.target.value);
    cxt.setKeyword(event.target.value);
  };

  const enterSearchHandler = (event) => {
    // const trimedKeyword = cxt.keyword.trim();
    // cxt.setKeyword(trimedKeyword);
    if (event.key === 'Enter') {
      navigate("/home");
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
        value={cxt.keyword}
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