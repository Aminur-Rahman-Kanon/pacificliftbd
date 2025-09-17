'use client';

import React from 'react';
import styles from './drawtoggle.module.css';
import { Menu } from 'lucide-react';

const Drawtoggle = () => {
    return (
        <div className={styles.drawtoggle}>
            <Menu color='white' size={25} />
        </div>
    )
}

export default Drawtoggle;
