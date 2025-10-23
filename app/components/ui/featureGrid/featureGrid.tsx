'use client';

import React from 'react';
import styles from './featureGrid.module.css';
import FeatureGridType from '@/app/types/featureGrid';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    item: FeatureGridType[]
}

const FeatureGrid:React.FC<Props> = ({ item }) => {

    if (!item.length) return;

    return (
        <section className={styles.featureGrid}>
            {
                item.map(itm => <div key={itm.id} className={styles.gridItem}>
                    <div className={styles.imgContainer}>
                        <Image src={itm.img}
                               alt={itm.heading}
                               width={80}
                               height={80}
                               sizes='100%'
                               className={styles.img} />
                    </div>

                    <h3 className={styles.headingSmall}>{itm.heading}</h3>
                    
                    <div className={styles.textContainer}>
                        {
                            itm.text ? itm.text.map((txt, idx) => <p key={idx} className={styles.text}>{txt}</p>) : null
                        }
                    </div>

                    {
                        itm.link ? <Link href={itm.link.href} className={styles.link}>{itm.link.text}</Link> : null
                    }
                </div>)
            }
        </section>
    )
}

export default FeatureGrid;
