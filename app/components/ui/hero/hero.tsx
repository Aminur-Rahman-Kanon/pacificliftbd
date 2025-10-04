import React from 'react';
import styles from './hero.module.css';
import HeroType from '@/app/types/hero';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
    item: HeroType
}

const Hero:React.FC<Props> = ({ item }) => {

    if (!item) return;

    const link = item.link ? <Link href={item.link.href} className={styles.link}>{item.link.text}</Link> : null;

    return (
        <div className={styles.hero}>
            <div className={styles.heroBg}>
                <Image src={item.backgroundImage}
                       alt='pacific lift signature service'
                       width={640}
                       height={427}
                       sizes='100%'
                       className={styles.img} />
            </div>
            <div className={styles.floatingContainer}>
                <h2 className={styles.headingLarge}>{item.header}</h2>
                <div className={styles.textContainer}>
                    {
                        item.textContainer.map(txt => <p key={txt.id} className={styles.text}>{txt.text}</p>)
                    }
                </div>
                {
                    link
                }
            </div>
        </div>
    )
}

export default Hero;
