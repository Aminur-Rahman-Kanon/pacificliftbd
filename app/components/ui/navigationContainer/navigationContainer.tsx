import React from 'react';
import styles from './navigationContainer.module.css';
import { Navigation } from '@/app/types/productPageSkeleton';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    navigationItem: Navigation[]
}

const NavigationContainer:React.FC<Props> = ({ navigationItem }) => {

  if (!navigationItem) return;

    return (
      <div className={styles.navigation}>
        {
          navigationItem.map(nav => <div key={nav.id} className={styles.gridItem}>
            <div className={styles.gridTop}>
              <Image src={nav.img}
                     alt={nav.link.text}
                     width={400}
                     height={400}
                     sizes='100%'
                     className={styles.img} />
            </div>
            <Link href={nav.link.href} className={styles.link}>{nav.link.text}</Link>
          </div>)
        }
      </div>
    )
}

export default NavigationContainer;
