import { NavLink } from "react-router-dom";

import menuItems from "./menuItems";

import styles from "./HeaderMenu.module.css"

const HeaderMenu = () => {

    const elements = menuItems.map(
        item => (
            <li key={item.text}>
                <NavLink to={item.to} className={styles.link}>
                    {item.text}
                </NavLink>
            </li>
        )
    );

    return (
        <ul className={styles.menu}>
            {elements}
        </ul>
    )
};

export default HeaderMenu;