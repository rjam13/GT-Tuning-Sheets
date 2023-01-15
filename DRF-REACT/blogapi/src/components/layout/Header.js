import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
// import { createTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import StyledNavLink from "../common/StyledNavLink";
import HorizontalDivider from "../design/HorizontalDivider";
import { primaryRoutes as routes } from "../../App";
import ProfilePopover from "./ProfilePopover";
import Cookies from "js-cookie";

// const theme = createTheme();

const Header = () => {
  // const classes = useStyles();
  const username = Cookies.get("username");
  console.log(username);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "transparent",
          pb: "40px",
        }}
      >
        <Toolbar
          className="header-toolbar"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box className="header-socials" sx={{ position: "absolute" }}>
            {/* socials here */}
          </Box>
          <Box
            className="header-profile"
            sx={{ position: "absolute", right: "24px", top: "24px" }}
          >
            <ProfilePopover username={username} />
          </Box>

          <Box
            className="header-logo__container"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              mt: "40px",
            }}
          >
            <Box
              component="img"
              sx={{
                height: 45,
                width: 68,
              }}
              href="/#"
              alt="Gran Turismo Logo"
              src="https://www.gran-turismo.com/common/front/img/global/logo-gt.svg"
            />
            <Typography
              variant="h1"
              color="inherit"
              noWrap
              sx={{
                mt: { xs: "20px", md: "0" },
                ml: { xs: "0", md: "20px" },
                fontSize: { xs: "1.5rem", md: "2.5rem" },
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
            {routes.map(({ name, path }, i, { length }) => (
              <React.Fragment key={name}>
                <StyledNavLink name={name} path={path} key={name} />
                {/* // not last one */}
                {length - 1 !== i && (
                  <Box
                    sx={{
                      fontWeight: "lighter",
                      fontSize: "28px",
                      mx: "15px",
                    }}
                  >
                    /
                  </Box>
                )}
              </React.Fragment>
            ))}
          </Box>
        </Toolbar>
        <HorizontalDivider sx={{ mt: "10px" }} />
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
