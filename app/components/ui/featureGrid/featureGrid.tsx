'use client';

import React from 'react';
import styles from './featureGrid.module.css';
import FeatureGridType from '@/app/types/featureGrid';
import Image from 'next/image';

type Props = {
    item: FeatureGridType[]
}

const FeatureGrid:React.FC<Props> = ({ item }) => {

    if (!item.length) return;

    return (
        <section className={styles.featurGrid}>
            {
                item.map(itm => <div key={itm.id} className={styles.gridItem}>
                    <div className={styles.iconContainer}>
                        <Image src={itm.img}
                               alt={itm.heading}
                               width={80}
                               height={80}
                               sizes='100%'
                               className={styles.icon} />
                    </div>

                    <h3 className={styles.headingSmall}>{itm.heading}</h3>
                </div>)
            }
        </section>
    )
}

export default FeatureGrid;
