import React from 'react';
import styles from './productContainer.module.css';
import { ProductType } from '@/app/types/industryPageSkeleton';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    heading: string | undefined,
    items: ProductType[]
}

const ProductContainer:React.FC<Props> = ({ items, heading }) => {

    if (!items || !heading) return;

    return (
        <div className={styles.product}>
            <div className={styles.top}>
                <h2 className={styles.headingMedium}>{`${heading} products`}</h2>
            </div>
            
            <div className={styles.gridContainer}>
                {
                    items.map(prd => <div key={prd.id} className={styles.gridItem}>
                        <div className={styles.gridTop}>
                            <Image src={prd.img}
                                   alt={prd.heading}
                                   width={300}
                                   height={200}
                                   sizes='100%'
                                   className={styles.img} />
                        </div>
                        <div className={styles.gridBottom}>
                            <h3 className={styles.headingSmall}>{prd.heading}</h3>
                            <Link href={prd.link.href} className={styles.link}>{prd.link.text}</Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default ProductContainer;
