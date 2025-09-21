import React from 'react';
import styles from './heroWithTextContainer.module.css';
import HeroWithTextContainerType from '@/app/types/heroWithTextContainer';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    item: HeroWithTextContainerType
}

const HeroWithTextContainer:React.FC<HeroWithTextContainerType> = ({ hero }) => {

    if (!hero) return;

    return (
        <section className={styles.heroWithTextContainer}>
            <div className={styles.heroTop}>
                <div className={styles.imgContainer}>
                    <Image src={hero.heroTop.img}
                        alt={hero.heroTop.heading}
                        width={640}
                        height={480}
                        sizes='100%'
                        className={styles.img} />
                </div>
                <div className={styles.floatingContainer}>
                    <h1 className={`${styles.heading} ${styles.large}`}>{hero.heroTop.heading}</h1>
                </div>
            </div>

            <div className={styles.heroBottom}>
                <h2 className={`${styles.heading} ${styles.medium}`}>{hero.heroBottom.heading}</h2>
                {
                    hero.heroBottom.text.map((txt, idx) => <p key={idx} className={styles.textStylish}>
                        {txt}
                    </p>)
                }
                <Link href={hero.heroBottom.link.href} className={styles.link}>{hero.heroBottom.link.text}</Link>
            </div>
        </section>
    )
}

export default HeroWithTextContainer;
