import React  from "react";
import { Link, useLocation } from "react-router-dom";
import styles from '../scss/styles.module.scss';

const Navigation = () => {
    const isTokenValid = () => {
        const tokenCookie = document.cookie.split(';').find((cookie) => cookie.match(/^login_token=/));
        const token = tokenCookie?.split('=')[1];
        return token === '123456' ? true : false;
    }

    const isLoggedIn = isTokenValid();

    const handleLogOut = () => {
        document.cookie = "login_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        location.reload();
    }

    const location = useLocation();

    return (
        <>
            <nav>
                <ul className={styles.navList}>
                    <li className={styles.navButton}>
                        <Link to='/' >Home</Link>
                    </li>
                    {isLoggedIn ?
                        <li className={styles.navButton}>
                            <Link to='/' onClick={handleLogOut}>Log out</Link>
                        </li>
                        :
                        <li className={styles.navButton}>
                            <Link to={`/login?returnUrl=${location.pathname}`}>Log in</Link>
                        </li>
                    }
                    <li className={styles.navButton}>
                        <Link to='/about' >About</Link>
                    </li>
                    <li className={styles.navButton}>
                        <Link to='/products' >Products</Link>
                    </li>
                    <li className={styles.navButton}>
                        <Link to='/stores' >Our Stores</Link>
                    </li>
                    <li className={styles.navButton}>
                        <Link to='/contact' >Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation;