'use client';

import React from 'react';
import styles from './cardGrid.module.css';
import { cardGrid } from '@/app/data/pacificOne';
import Image from 'next/image';
import Link from 'next/link';

const CardGrid = () => {
    return (
        <section className={styles.cardGrid}>
            <h2 className={styles.headingLarge}>More Pacific Lift Digital Service</h2>
            <div className={styles.gridContainer}>
                {
                    cardGrid.map(itm => <div key={itm.id} className={styles.gridItem}>
                        <div className={styles.top}>
                            <div className={styles.imgContainer}>
                                <Image src={itm.backgroundImg}
                                    alt={itm.heading}
                                    width={200}
                                    height={100}
                                    sizes='100%'
                                    className={styles.img} />
                            </div>
                            <h3 className={styles.headingSmall}>{itm.heading}</h3>
                            <p className={styles.textSmall}>{itm.text}</p>
                        </div>

                        <Link href={itm.link.href} className={styles.link}>{itm.link.text}</Link>
                    </div>)
                }
            </div>
        </section>
    )
}

export default CardGrid;
