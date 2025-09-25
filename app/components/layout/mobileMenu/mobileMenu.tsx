'use client';

import React, { useEffect } from 'react';
import styles from './mobileMenu.module.css';
import { X } from 'lucide-react';
import Logo from '../topbar/logo/logo';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import Navbar from '../topbar/navbar/navbar';
import { useMobileMenu } from '@/app/store/useMobileMenu';
import useScreenWidth from '@/app/hooks/useScreenWidth';
import { usePathname } from 'next/navigation';

const MobileMenu = () => {

    const { isMobileMenuOpen, closeMobileMenu } = useMobileMenu();
    const screenWidth = useScreenWidth();
    const pathname = usePathname();

    const toggleMobileMenu = () => {
        if (screenWidth <= 1100 || isMobileMenuOpen){
            closeMobileMenu()
        }
    }

    useEffect(() => {
        toggleMobileMenu();
    }, [pathname])

    return (
        <section className={ isMobileMenuOpen ? `${styles.mobileMenu} ${styles.open}` : styles.mobileMenu}>
            <div className={styles.topContainer}>
                <div className={styles.top}>
                    <div className={styles.logoContainer}>
                        <Logo />
                    </div>
                    <div className={styles.xContainer} onClick={toggleMobileMenu}>
                        <X size={20} color='white'/>
                    </div>
                </div>
                <div className={styles.flexContainer}>
                    <Navbar />
                </div>
            </div>


            <div className={styles.bottom}>
                <h2 className={styles.headingSmall}>Pacific lift BD</h2>
                <div className={styles.iconContainer}>
                    <Link href={'#'} className={styles.link}>
                        <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
                    </Link>
                    <Link href={'#'} className={styles.link}>
                        <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
                    </Link>
                    <Link href={'#'} className={styles.link}>
                        <FontAwesomeIcon icon={faYoutube} className={styles.icon} />
                    </Link>
                    <Link href={'#'} className={styles.link}>
                        <FontAwesomeIcon icon={faTiktok} className={styles.icon} />
                    </Link>
                </div>

                <div className={styles.textContainer}>
                    <p className={styles.textNormal}><strong>head office:</strong> 17 (old-14) north kutubkhali khan super market, jatrabari, dhaka 1236</p>
                    <p className={styles.textNormal}><strong>warehouse:</strong> b/75 malibag, chowdhurypara, dhaka-1100</p>
                    <p className={styles.textBold}>pacific lift &copy; all rught reserved</p>
                </div>
            </div>
        </section>
    )
}

export default MobileMenu
