import React from 'react';
import styles from './logo.module.css';
import Image from 'next/image';

const Logo = () => {
    return (
        <div className={styles.logo}>
            <Image src='/images/logo/logo_transparent.png'
                   alt='logo'
                   height={100}
                   width={200}
                   sizes='100%'
                   className={styles.img}/>
        </div>
    )
}

export default Logo
