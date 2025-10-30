import React from 'react';
import styles from './featuresStories.module.css';
import featuresStories from '@/app/data/others/featuresStories';
import Image from 'next/image';
import Link from 'next/link';

const FeaturesStories = () => {
    return (
        <div className={styles.featuresContainer}>
            <h1 className={styles.headingLarge}>featured stories</h1>
            <div className={styles.featuresStories}>
                {
                    featuresStories.map(str => <div key={str.id} className={styles.container}>
                        <div className={styles.header}>
                            <div className={styles.imgContainer}>
                                <Image src={str.img}
                                    alt={str.header}
                                    width={300}
                                    height={300}
                                    sizes='100%'
                                    className={styles.img} />
                            </div>
                            <div className={styles.textContainer}>
                                <p className={styles.textSmall}>{str.date}</p>
                                <p className={styles.textSmall}>{str.location}</p>
                                <h2 className={styles.headingSmall}>{str.header}</h2>
                            </div>
                        </div>
                        <Link href={'#'} className={styles.link}>{str.link}</Link>
                    </div>)
                }
            </div>
        </div>
    )
}

export default FeaturesStories;
