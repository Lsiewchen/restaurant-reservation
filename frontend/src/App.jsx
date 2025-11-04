import {Fragment} from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home/Home.jsx'

function App() {
  return (
    <Fragment>
      <Header/>
      <Home/>
      <Footer/>
    </Fragment>
  )
}

export default App
