import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import HoverBox from "../design/HoverBox";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  // Divider,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { authenticationRoutes as routes } from "../../App";

export default function ProfilePopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <HoverBox
        sx={{ display: "flex", cursor: "pointer", alignItems: "center" }}
        aria-describedby={id}
        onClick={handleClick}
      >
        <Typography sx={{ mr: "7px" }}>Profile</Typography>
        <PersonOutlineIcon sx={{ height: "30px", width: "30px" }} />
      </HoverBox>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {/* <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
        <Divider /> */}
        <List>
          {routes.slice(0, 2).map(({ name, path }, i, { length }) => (
            <ListItem disablePadding>
              <ListItemButton>
                <NavLink
                  style={{
                    fontWeight: "bolder",
                    color: "black",
                    textDecoration: "none",
                  }}
                  href="#"
                  to={path}
                >
                  <ListItemText primary={name} />
                </NavLink>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Popover>
    </div>
  );
}
