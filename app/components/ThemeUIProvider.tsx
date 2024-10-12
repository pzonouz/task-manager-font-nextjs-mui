"use client"

import { ThemeProvider } from '@mui/material'
import { createTheme as materialCreateTheme } from '@mui/material/styles';
const materialTheme = materialCreateTheme();

const ThemeUIProvider = ({ children }: { children: any }) => {
    return (
        <ThemeProvider theme={materialTheme}>{children}</ThemeProvider>
    )
}

export default ThemeUIProvider