import React from "react";
import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/system";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const Layout = () => {
  // GLOBAL STYLES HERE
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
    typography: {
      fontFamily: [
        "Usual",
        "Helvetica Neue",
        "HelveticaNeue-Medium",
        "HelveticaNeue-Light",
        "Roboto",
        "sans-serif",
      ].join(","),
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: "#202D40",
            backgroundImage:
              "linear-gradient(-180deg, #202D40 0%, #323F47 50%, #1B2C3D 100%)",
          },
        },
      },
      MuiPopover: {
        styleOverrides: {
          root: {
            "& .MuiPopover-paper": {
              backgroundColor: "white",
              color: "black",
              "& .MuiListItem-root:hover, .MuiMenuItem-root:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.08)",
              },
              "& .MuiDivider-root": {
                backgroundColor: "rgba(0, 0, 0, 0.08)",
              },
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: "transparent",
          },
        },
      },
    },
  });

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Box id="detail" sx={{ minHeight: "100vh" }}>
          <Outlet />
        </Box>
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Layout;
