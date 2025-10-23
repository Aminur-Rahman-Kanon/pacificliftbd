import React from 'react';
import styles from './simpleGridLayout.module.css';
import SimpleGridLayoutType from '@/app/types/simpleGridLayout';
import LucideIconWrapper from '../lucideIconWrapper/lucideIconWrapper';

type Props = {
    item: SimpleGridLayoutType
}

const SimpleGridLayout:React.FC<Props> = ({ item }) => {

    if (!item) return;

    return (
        <div className={styles.simpleGridLayout}>
            {
                item.heading ? <h2 className={styles.headingMedium}>{item.heading}</h2> : null
            }
            <div className={styles.gridLayout}>
                {
                    item.gridItems.map(itm => <div key={itm.id} className={styles.gridItem}>
                        <div className={styles.iconContainer}>
                            <LucideIconWrapper icon={itm.icon} size={50} color='white' />
                        </div>
                        <h3 className={styles.headngSmall}>{itm.heading}</h3>
                        <p className={styles.textNormal}>{itm.text}</p>
                    </div>)
                }
            </div>
        </div>
    )
}

export default SimpleGridLayout;
