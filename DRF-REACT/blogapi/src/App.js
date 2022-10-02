import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import {CookiesProvider} from "react-cookie";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Header from './components/basic/Header'
import Footer from './components/basic/Footer'
import ListSheet from './pages/ListSheet'
import DetailSheet from './pages/DetailSheet';
import Register from './pages/users/Register'
import Login from './pages/users/Login';
import Logout from './pages/users/Logout';

const App = () => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    // <CookiesProvider>
    <Router>
      <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Header />
          <Routes>
            <Route exact path='/' element={<ListSheet />} />
            <Route exact path='/sheet' element={<DetailSheet />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/logout' element={<Logout />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </React.StrictMode>
    </Router>
    // </CookiesProvider> 
  )
}

export default App