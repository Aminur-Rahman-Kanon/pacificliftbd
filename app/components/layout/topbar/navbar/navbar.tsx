import React from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navItem}>
                <Link href={'#'} className={styles.link}>Home</Link>
                <Link href={'#'} className={styles.link}>Products & Services</Link>
                <Link href={'#'} className={styles.link}>Tools & Resources</Link>
                <Link href={'#'} className={styles.link}>Our Company</Link>
                <Link href={'#'} className={styles.link}>Contact Us</Link>
            </div>
        </div>
    )
}

export default Navbar
