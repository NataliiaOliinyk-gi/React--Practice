import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

// const lightTheme = createTheme({
//     palette: {
//         mode: 'light'
//     }
// })

const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    }
})

const Theme = ({ children }) => {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}

export default Theme;