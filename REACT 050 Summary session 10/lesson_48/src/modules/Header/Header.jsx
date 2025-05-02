
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderAuth from "./HeaderAuth/HeaderAuth";
import HeaderMenu from "./HeaderMenu/HeaderMenu";

import styles from "./Header.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.wrapper}>
                    <HeaderLogo />
                    <HeaderMenu />
                    <HeaderAuth />
                </div>
            </div>
        </header>
    )
};

export default Header;