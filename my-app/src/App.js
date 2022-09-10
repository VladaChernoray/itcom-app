import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CategoriesRoute } from './routes/Categories';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';


const themeDark = createTheme({
    palette: {
      background: {
        default: "#3e3c66"
      },
      text: {
        primary: "#ffffff"
      }
    }
  });
class App extends React.Component {
    render() {
        return (
            <React.StrictMode>
                    <BrowserRouter>
                    <ThemeProvider theme={themeDark}>
                        <CssBaseline/>
                        <CategoriesRoute/>
                    </ThemeProvider>
                    </BrowserRouter>
            </React.StrictMode>
        )
    }
}

export default App
