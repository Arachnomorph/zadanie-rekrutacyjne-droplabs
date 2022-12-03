import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import styles from '../scss/styles.module.scss'

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.logoContainer}>
                <Link to='/' className={styles.logo}>ABC Store</Link>
                <img className={styles.languageIcon} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/320px-Flag_of_the_United_Kingdom.svg.png" />
            </div>
            <Navigation />
        </div>
    )
};

export default Header;