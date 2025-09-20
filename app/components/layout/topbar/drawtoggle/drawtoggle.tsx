'use client';

import React from 'react';
import styles from './drawtoggle.module.css';
import { Menu } from 'lucide-react';
import { useMobileMenu } from '@/app/store/useMobileMenu';
import useScreenWidth from '@/app/hooks/useScreenWidth';

const Drawtoggle = () => {

    const { isMobileMenuOpen, openMobileMenu } = useMobileMenu();
    const screenWidth = useScreenWidth();

    const handleMobileMenuOpen = () => {
        if (screenWidth <= 1100 || !isMobileMenuOpen){
            openMobileMenu()
        }
    };


    return (
        <div className={styles.drawtoggle} onClick={handleMobileMenuOpen}>
            <Menu color='white' size={25} />
        </div>
    )
}

export default Drawtoggle;
