import React from 'react';
import styles from './topbar.module.css';
import Logo from './logo/logo';
import Navbar from './navbar/navbar';
import AdditionalTopbar from './additionalTopbar/additionalTopbar';
import Drawtoggle from './drawtoggle/drawtoggle';

const Topbar = () => {
    return (
        <div className={styles.topbar}>
            <div className={styles.logoContainer}>
                <Logo />
            </div>

            <div className={styles.navbarContainer}>
                <AdditionalTopbar />
                <Navbar />
            </div>
            
            <div className={styles.drawtoggleContainer}>
                <Drawtoggle />
            </div>
        </div>
    )
}

export default Topbar
