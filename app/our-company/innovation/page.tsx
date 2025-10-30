import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import GridLayout from '@/app/components/ui/gridLayout/gridLayout';
import innovationData from '@/app/data/ourCompany/innovation';

const Page = () => {
    return (
        <section className={styles.innovation}>
            <div className={styles.hero}>
                <div className={styles.heroHead}>
                    <div className={styles.imgContainer}>
                        <Image src={'/images/innovation/hero.jpg'}
                               alt='innovation'
                               width={640}
                               height={480}
                               sizes='100%'
                               className={styles.img} />
                    </div>
                    <div className={styles.floatingContainer}>
                        <h1 className={styles.headingLarge}>elevated thinking</h1>
                    </div>
                </div>
                <div className={styles.heroTail}>
                    <h2 className={styles.headingMedium}>taking ideas and innovation to all new levels</h2>
                    <p className={styles.textStylish}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil atque sequi libero cum saepe aliquam velit numquam, repellat ducimus exercitationem qui pariatur, culpa natus omnis autem dolores magni et quasi?
                    Dolore dolor quia nesciunt unde delectus error, porro esse corrupti repellendus at. Unde qui esse accusantium iste quod, modi, quo, autem sunt culpa illum non? Eveniet id placeat inventore dolorem!
                    Impedit praesentium, inventore nam debitis ab maiores, iste enim dolorem cumque, facere soluta vel laboriosam! Odio repudiandae aperiam voluptatibus, sequi labore mollitia explicabo adipisci recusandae debitis illo, sint tenetur dolores.</p>
                </div>
            </div>

            <div className={styles.banner}>
                <div className={styles.imgContainer}>
                    <Image src={'/images/innovation/banner.jpg'}
                           alt='banner'
                           width={640}
                           height={480}
                           sizes='100%'
                           className={styles.img} />
                </div>
                <div className={styles.floatingContainer}>
                    <h2 className={styles.headingLarge}>meet the connected elevator</h2>
                    <p className={styles.textNormal}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem tempora unde eaque in! Mollitia totam a, distinctio quam, iste voluptate voluptatum atque quae, sed sapiente impedit doloribus ad! Cupiditate, ab?</p>
                    <Link href={'#'} className={styles.link}>learn more</Link>
                </div>
            </div>

            <div className={styles.gridContainer}>
                {
                    innovationData.map(itm => <GridLayout key={itm.id} item={itm}/>)
                }
            </div>
        </section>
    )
}

export default Page;
