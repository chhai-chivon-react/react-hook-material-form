import React from 'react';
import './App.css';
import SignUpForm from './components/sign_up_form';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3a97e8",
    },
    secondary: {
      main: "#E33E7F",
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <SignUpForm></SignUpForm>
    </MuiThemeProvider>
  );
}

export default App;
