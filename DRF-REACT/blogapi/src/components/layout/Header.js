import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
// import { createTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import StyledNavLink from "../common/StyledNavLink";
import HorizontalDivider from "../design/HorizontalDivider";

// const theme = createTheme();

const Header = () => {
  // const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "transparent",
          py: "40px",
          // bottom border
          // "&:after": {
          //   mt: "25px",
          //   mx: "auto",
          //   content: '""',
          //   display: "block",
          //   backgroundColor: "white",
          //   width: "85vw",
          //   height: "1px",
          // }
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            className="header-logo__container"
            sx={{
              display: "flex",
              // flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              sx={{
                height: 45,
                width: 68,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              href="/#"
              alt="GT Tuning Sheet Logo"
              src="https://www.gran-turismo.com/common/front/img/global/logo-gt.svg"
            />
            <Typography
              variant="h1"
              fontSize="2.5rem"
              color="inherit"
              noWrap
              sx={{
                ml: "20px",
                flexGrow: 1,
              }}
            >
              Gran Turismo Tuning Sheets
            </Typography>
          </Box>

          <Box
            sx={{
              mt: "5px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {["Register", "Login", "Logout"].map((route, i, { length }) => {
              if (length - 1 === i) {
                // last one
                return <StyledNavLink route={route} />;
              } else {
                // not last one
                return (
                  <>
                    <StyledNavLink route={route} />
                    <Box
                      sx={{
                        fontWeight: "lighter",
                        fontSize: "28px",
                        mx: "15px",
                      }}
                    >
                      /
                    </Box>
                  </>
                );
              }
            })}
          </Box>
        </Toolbar>
        <HorizontalDivider sx={{mt: "10px"}}/>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
