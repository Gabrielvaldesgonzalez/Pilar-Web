import React from 'react';
import './App.css';

import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import {AppRouter} from "./routes/AppRouter";

const defaultTheme = createTheme();


export function App() {

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline/>
            <AppRouter/>
        </ThemeProvider>
    );
}
