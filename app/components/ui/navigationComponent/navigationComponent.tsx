import React from 'react';
import styles from './navigationComponent.module.css';
import navigationComponentData from '@/app/data/navigationComponent';
import Link from 'next/link';
import Image from 'next/image';

const NavigationComponent = () => {
    return (
        <div className={styles.navigationComponent}>
            {
                navigationComponentData.map(navCom => <Link key={navCom.id} href={navCom.href} className={styles.link}>
                    <div className={styles.imgContainer}>
                        <Image src={navCom.backgroundImg}
                                alt={navCom.heading}
                                width={420}
                                height={280}
                                sizes='100%'
                                className={styles.img} />
                        <span className={styles.headingFloating}>{navCom.heading}</span>
                    </div>

                    <h3 className={styles.headingSmall}>{navCom.heading}</h3>
                </Link>)
            }
        </div>
    )
}

export default NavigationComponent;
