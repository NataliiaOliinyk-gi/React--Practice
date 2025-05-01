import Button from "@mui/material/Button";

import { useSwitchTheme } from "../../../context/Theme";

const SwitchThemeButton = () => {

    const { nextTheme, toggleTheme } = useSwitchTheme();
    // const { theme, toggleTheme } = useSwitchTheme();

    return (
        <Button onClick={toggleTheme} variant="outlined">
            To {nextTheme} theme
        </Button>
        // <Button onClick={toggleTheme} variant="outlined">
        //     {theme}
        // </Button>
    )
};

export default SwitchThemeButton;