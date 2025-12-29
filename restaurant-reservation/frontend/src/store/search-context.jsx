import React from 'react';

const SearchContext = React.createContext({
  keyword: '',
  setKeyword: () => {}
})

export default SearchContext