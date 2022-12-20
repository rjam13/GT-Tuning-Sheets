import React from "react";
import { NavLink } from "react-router-dom";
import { Box } from "@mui/system";

const StyledNavLink = ({ name, path }) => {
  return (
    <Box
      sx={{
        position: "relative",
        "&:after": {
          backgroundColor: "white",
          overflow: "hidden",
          display: "block",
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          width: 0,
          height: "1px",
          transition: ".15s ease-out",
          WebkitTransition: ".15s ease-out",
        },
        "&:hover:after": {
          width: "100%",
        },
      }}
    >
      <NavLink
        href="#"
        style={{ fontWeight: "bolder", color: "white", textDecoration: "none" }}
        to={path}
      >
        {name.toUpperCase()}
      </NavLink>
    </Box>
  );
};

export default StyledNavLink;
