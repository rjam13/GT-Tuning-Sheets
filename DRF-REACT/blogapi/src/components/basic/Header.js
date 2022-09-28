import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();

const Header = () => {
  // const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        elevation={0}
        sx={{
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Toolbar>
          {/* h6 = type of element, color = use what is established from parent, 
          noWrap = element of flexbox that stops text from wrapping */}
          <Typography variant="h6" color="inherit" noWrap>
            Gran Turismo Tuning Sheets
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;