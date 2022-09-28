import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/basic/Header'
import Footer from './components/basic/Footer'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import ListSheet from './pages/ListSheet'
import DetailSheet from './pages/DetailSheet';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const routing = (
  <Router>
    <React.StrictMode>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />
        <Routes>
          <Route exact path='/' element={<ListSheet />} />
          <Route exact path='/sheet' element={<DetailSheet />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </React.StrictMode>
  </Router>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(routing);
