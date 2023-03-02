import React from 'react';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#064A37",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: "500",
        },
      },
    },
  },
});
const Buttons = ({type}) => {
  let data;
  switch (type) {
    case "login":
      data = {
        content: "Login",
        varient: "contained",
      };
      break;
    case "signup":
      data = {
        content: "SignUp",
        varient: "outlined",
      };
      break;
    case "submit":
      data = {
        content: "Submit",
        varient: "contained",
      };
      break;
    case "logout":
      data = {
        content: "Logout",
        varient: "contained",
      };
      break;
    default:
      break;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <Button variant={data.varient} color="primary">
          {data.content}
        </Button>
      </ThemeProvider>
    </>
  );
};

export default Buttons

