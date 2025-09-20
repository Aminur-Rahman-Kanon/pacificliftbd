import React from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';
import NavItem from './navItem/navItem';
import nestedNavItem from '@/app/data/nestedNavItem';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navItem}>
                <li className={styles.item}>
                    {/* <FontAwesomeIcon icon={ faHouse } size='3x' color='white' /> */}
                    <Link href={'/'} className={styles.link}>Home</Link>
                </li>
                {
                    nestedNavItem.map(itm => <li key={itm.id} className={styles.item}>
                        <NavItem navItem={itm}/>
                    </li>)
                }
                <li className={styles.item}>
                    {/* <FontAwesomeIcon icon={ faEnvelope } size='3x' color='white' /> */}
                    <Link href={'/'} className={styles.link}>Contact us</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
