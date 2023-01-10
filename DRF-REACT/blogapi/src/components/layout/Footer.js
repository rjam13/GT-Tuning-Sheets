import React from "react";
// import { useTheme } from "@mui/material/styles";
import { Box, Typography, Container } from "@mui/material";
import { NavLink } from "react-router-dom";
import { primaryRoutes as routes } from "../../App";
import HorizontalDivider from "../design/HorizontalDivider";
import HoverBox from "../design/HoverBox";

const Footer = () => {
  // const theme = useTheme();
  return (
    <Container
      component="footer"
      maxWidth={false}
      sx={{
        opacity: 0.8,
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
      <HoverBox
        component="a"
        href="/#"
        sx={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          mb: "1rem",
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
      </HoverBox>
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
            <HoverBox
              sx={{
                textAlign: "center",
                color: "white",
              }}
            >
              {name}
            </HoverBox>
          </NavLink>
        ))}
      </Box>
      <HorizontalDivider width="100%" />
      <Box>
        <small>&copy; GT Tuning Sheets. All rights reserved.</small>
      </Box>
    </Container>
  );
};

export default Footer;
