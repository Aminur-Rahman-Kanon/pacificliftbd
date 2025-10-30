import React from 'react';
;import styles from './page.module.css';
import Image from 'next/image';
import GridLayout from '@/app/components/ui/gridLayout/gridLayout';
import safetyData from '@/app/data/others/safety';

const Page = () => {
    return (
        <section className={styles.safety}>
            <div className={styles.hero}>
                <div className={styles.heroHead}>
                    <div className={styles.imgContainer}>
                        <Image src={'/images/safety/hero.jpg'}
                               alt='safety'
                               width={640}
                               height={480}
                               sizes='100%'
                               className={styles.img} />
                    </div>
                    <div className={styles.floatingContainer}>
                        <h1 className={styles.headingLarge}>Health & Safety</h1>
                        <button className={styles.downloadBtn}>Download our policy</button>
                    </div>
                </div>
                <div className={styles.heroTail}>
                    <h2 className={styles.headingMedium}>connecting safely</h2>
                    <p className={styles.textStylish}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, atque. Qui velit quam provident dolor illum. Illo dolore eaque pariatur odit praesentium exercitationem labore libero tenetur debitis veniam, eos in.
                    Quidem totam maxime ipsam sint suscipit tenetur harum asperiores quos id possimus magnam odit quod rerum, ut dolore officia est aliquid veniam. Culpa facere, hic quod asperiores ipsa officiis nemo.</p>
                </div>
            </div>

            <div className={styles.gridContainer}>
                {
                    safetyData.map(itm => <GridLayout key={itm.id} item={itm} />)
                }
            </div>
        </section>
    )
}

export default Page;
