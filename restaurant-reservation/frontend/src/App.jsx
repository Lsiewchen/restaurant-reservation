import { Routes, Route, Navigate } from "react-router";
import { ThemeProvider, createTheme } from '@mui/material/styles';
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
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header/>
      <Box sx={{ flexGrow: 1, bgcolor:'#F5F5F5', pt: '90px' }}>
        <Routes>
          <Route path="/" element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home/>} />
          <Route path="restaurant/:rtId" element={<Restaurant/>} />
          <Route path="reservation" element={<Reservation/>} />
        </Routes>
      </Box>      
      <Footer/>
    </Box>
    </ThemeProvider>
  )
}

export default App
