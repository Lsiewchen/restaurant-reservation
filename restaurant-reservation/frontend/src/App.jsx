import { Routes, Route, Navigate } from "react-router";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Toaster } from 'react-hot-toast';
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
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", alignItems:'center' }}>
      <Header/>
      <Box sx={{ flexGrow: 1, bgcolor:'#FAFAFA', pt: '85px', width:'100%' }}>
        <Routes>
          <Route path="/" element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home/>} />
          <Route path="home/search/:keyword" element={<Home/>} />
          <Route path="home/search/" element={<Navigate replace to="/home" />} />
          <Route path="restaurant/:rtId" element={<Restaurant/>} />
          <Route path="reservation" element={<Reservation/>} />
        </Routes>
      </Box>
      <Footer/>
    </Box>
    <Toaster/>
    </ThemeProvider>
  )
}

export default App
