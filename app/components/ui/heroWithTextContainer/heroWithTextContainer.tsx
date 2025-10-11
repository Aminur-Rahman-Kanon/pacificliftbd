'use client';

import React from 'react';
import styles from './heroWithTextContainer.module.css';
import { Hero } from '@/app/types/productPageSkeleton';
import Image from 'next/image';
import TextContainer from '../textContainer/textContainer';

type Props = {
    hero: Hero
}

const HeroWithTextContainer:React.FC<Props> = ({ hero }) => {

    if (!hero) return;

    return (
        <section className={styles.heroWithTextContainer}>
            <div className={styles.heroTop}>
                <div className={styles.imgContainer}>
                    <Image src={hero.heroTop.img}
                        alt={hero.heroTop.heading}
                        width={640}
                        height={427}
                        quality={100}
                        sizes="(max-width: 768px) 100vw, 640px"
                        className={styles.img} />
                </div>
                <div className={styles.floatingContainer}>
                    <h1 className={`${styles.heading} ${styles.large}`}>{hero.heroTop.heading}</h1>
                </div>
            </div>

            <TextContainer item={hero.heroBottom} />
        </section>
    )
}

export default HeroWithTextContainer;
