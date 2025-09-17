import React from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';
import ProductAndServices from './nestedNavItems/productsAndService/productAndService';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navItem}>
                <li className={styles.item}>
                    <Link href={'/'} className={styles.link}>Home</Link>
                </li>
                <li className={styles.item}>
                    <span className={styles.link}>Products & Services</span>
                    <div className={styles.nestedItem}>
                        <ProductAndServices />
                    </div>
                </li>
                <li className={styles.item}>
                    <span className={styles.link}>Tools & Resources</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.link}>Our Company</span>
                </li>
                <li className={styles.item}>
                    <Link href={'/'} className={styles.link}>Contact us</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
