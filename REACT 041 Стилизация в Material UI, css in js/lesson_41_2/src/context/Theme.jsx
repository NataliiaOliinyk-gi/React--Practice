import { useState, createContext, useContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const themeSwitchContext = createContext();

// const theme = createTheme({
//     palette: {
//         mode: "dark",
//         info: {
//             main: "#a3b7cb",
//         }
//     },
//     typography: {
//         h6: {
//             fontSize: "1rem",
//             lineHeight: "1.5",
//         },
//     },
// })

const lightTheme = createTheme({
    palette: {
        mode: "light",
        info: {
            main: "#4c4b4b",
        },
    },
    typography: {
        h6: {
            fontSize: "1rem",
            lineHeight: "1.5",
        },
    },
});

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        info: {
            main: "#a3b7cb",
        }
    },
    typography: {
        h6: {
            fontSize: "1rem",
            lineHeight: "1.5",
        },
    },
});

const Theme = ({ children }) => {

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))

    return (

        <themeSwitchContext.Provider
            value={{ currentTheme: theme, nextTheme: theme === "light" ? "dark" : "light", toggleTheme }}>

            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                <CssBaseline />
                {children}
            </ThemeProvider>

        </themeSwitchContext.Provider>

        // <themeSwitchContext.Provider value={{theme, toggleTheme}}>

        //     <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        //         <CssBaseline />
        //         {children}
        //     </ThemeProvider>

        // </themeSwitchContext.Provider>
    )

};

export default Theme;

export const useSwitchTheme = () => {

    const themeInfo = useContext(themeSwitchContext);
    return themeInfo;
};