/** @jsxImportSource @emotion/react */
import { Box } from "@mui/material";

import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import HeaderCart from './HeaderCart/HeaderCart';
import SwitchThemeButton from './SwitchThemeButton/SwitchThemeButton';

// import styles from './Header.module.css';
import { headerStyle, rightInfo } from "./styles.js";

const Header = () => {
    return (
        <header css={headerStyle}>
            <HeaderLogo />
            <HeaderMenu />
            <Box css={rightInfo}>
                <SwitchThemeButton />
                <HeaderCart />
            </Box>
            
        </header>
    )
};

export default Header;