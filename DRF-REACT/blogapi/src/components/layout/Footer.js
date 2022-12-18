import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, Container } from "@mui/material";
import { NavLink } from "react-router-dom";
import { primaryRoutes as routes } from "../../App";
import HorizontalDivider from "../design/HorizontalDivider";

const Footer = () => {
  const theme = useTheme();
  return (
    <Container
      component="footer"
      maxWidth={false}
      sx={{
        opacity: 0.7,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: "2em",
        backgroundColor: "transparent",
        "& > *": {
          mb: "2rem",
        },
      }}
    >
      <Box
        component="a"
        href="/#"
        sx={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          mb: "1rem",
          transition: "all 400ms ease",
          "&:hover": { opacity: "0.6" },
        }}
      >
        <img
          src="https://www.gran-turismo.com/common/front/img/global/logo-gt.svg"
          href="/#"
          alt="Codenected logo"
        />
        <Typography
          variant=""
          noWrap
          sx={{
            ml: "10px",
            color: "white",
            flexGrow: 1,
          }}
        >
          Gran Turismo Tuning Sheets
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          flexGrow: 1,
          justifyContent: "center",
          alignContent: "center",
          gap: { xs: "1rem", sm: "2rem" },
        }}
      >
        {routes.map(({ name, path }) => (
          <NavLink
            key={name}
            to={path}
            // style instead of sx because NavLink is not mui
            style={{
              textDecoration: "none",
            }}
            tabIndex="-1"
          >
            {() => (
              <Typography
                sx={{
                  textAlign: "center",
                  color: "white",
                  transition: "all 400ms ease",
                  "&:hover": { color: theme.palette.primary.main },
                }}
                color="primary"
              >
                {name}
              </Typography>
            )}
          </NavLink>
        ))}
      </Box>
      <HorizontalDivider />
      <Box>
        <small>&copy; GT Tuning Sheets. All rights reserved.</small>
      </Box>
    </Container>
  );
};

export default Footer;
