import React from "react";
import { Link } from "react-router-dom";
import styles from '../scss/styles.module.scss'

const Navigation = () => {


    return (
        <>
            <nav>
                <ul className={styles.navList}>
                <li>
                        <Link to='/' className="nav-button">Home</Link>
                    </li>
                    <li>
                        <Link to='login' className="nav-button">Log in</Link>
                    </li>
                    <li>
                        <Link to='/about' className="nav-button">About</Link>
                    </li>
                    <li>
                        <Link to='/stores' className="nav-button">Our Stores</Link>
                    </li>
                    <li>
                        <Link to='/contact' className="nav-button">Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation;