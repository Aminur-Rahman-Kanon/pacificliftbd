import React from 'react';
import styles from './newspaperLayout.module.css';
import NewspaperLayoutType from '@/app/types/newspaperLayout';
import Link from 'next/link';
import Image from 'next/image';

const NewspaperLayout:React.FC<NewspaperLayoutType> = ({ items }) => {
    
    return (
        <div className={styles.newspaperLayout}>
            <div className={styles.gridItem}>
                <div className={styles.textContainer}>
                    <div className={styles.textContainerTop}>
                        <h3 className={styles.headingSmall}>{items.item1.heading}</h3>
                        <p className={styles.textStylish}>{items.item1.text}</p>
                    </div>
                    <Link href={items.item1.href} className={styles.link}>{items.item1.textForLink}</Link>
                </div>
                <div className={styles.imgContainer}>
                    <Image src={items.item1.img}
                        alt={items.item1.heading}
                        width={480}
                        height={768}
                        sizes='100%'
                        className={styles.img} />
                </div>
            </div>

            <div className={styles.gridItem}>
                <div className={styles.imgContainer}>
                    <Image src={items.item2.img}
                        alt={items.item2.heading}
                        width={480}
                        height={768}
                        sizes='100%'
                        className={styles.img} />
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.textContainerTop}>
                        <h3 className={styles.headingSmall}>{items.item2.heading}</h3>
                        <p className={styles.textStylish}>{items.item2.text}</p>
                    </div>
                    <Link href={items.item2.href} className={styles.link}>{items.item2.textForLink}</Link>
                </div>
            </div>
        </div>
    )
}

export default NewspaperLayout;
