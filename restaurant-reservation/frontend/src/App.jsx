import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Toaster } from 'react-hot-toast';
import SearchContext from './store/search-context.jsx';
import Box from '@mui/material/Box';
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home/Home.jsx'
import Restaurant from './components/Restaurant/Restaurant.jsx'
import Reservation from './components/Reservation/Reservation.jsx'

const theme = createTheme ( {
  typography: {
    fontFamily: 'Montserrat'
  }
})

function App() {
  const [keyword, setKeyword] = useState('');

  return (
    <ThemeProvider theme={theme}>
    <SearchContext.Provider value={{keyword: keyword, setKeyword: setKeyword}}>
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", alignItems:'center' }}>
        <Header/>
        <Box sx={{ flexGrow: 1, bgcolor:'#FAFAFA', pt: '85px', minHeight: 400, width:'100%' }}>
          <Routes>
            <Route path='*' element={<Home/>} />
            <Route path="home" element={<Home/>} />
            <Route path="restaurant/:rtId" element={<Restaurant/>} />
            <Route path="reservation" element={<Reservation/>} />
          </Routes>
        </Box>
        <Footer/>
      </Box>
    <Toaster/>
    </SearchContext.Provider>
    </ThemeProvider>
  )
}

export default App
