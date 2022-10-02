import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

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
          <Typography 
            variant="h6" 
            color="inherit" 
            noWrap
            sx={{
              flexGrow: 1,
            }}
          >
            Gran Turismo Tuning Sheets
          </Typography>
          <nav>
						<Link
							color="textPrimary"
							href="#"
							sx={{
                margin: theme.spacing(1, 1.5),
              }}
							component={NavLink}
							to="/register"
						>
							Register
						</Link>
					</nav>
					<Button
						href="#"
						color="primary"
						variant="outlined"
						sx={{
              margin: theme.spacing(1, 1.5),
            }}
						component={NavLink}
						to="/login"
					>
						Login
					</Button>
					<Button
						href="#"
						color="primary"
						variant="outlined"
						sx={{
              margin: theme.spacing(1, 1.5),
            }}
						component={NavLink}
						to="/logout"
					>
						Logout
					</Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;