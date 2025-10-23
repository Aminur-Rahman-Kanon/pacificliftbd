import React from 'react';
import styles from './logo.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
    return (
        <Link href={'/'} className={styles.logo}>
            <Image src='/images/logo/logo_8.png'
                   alt='logo'
                   height={200}
                   width={200}
                   sizes='100vw'
                   className={styles.img}/>
        </Link>
    )
}

export default Logo
