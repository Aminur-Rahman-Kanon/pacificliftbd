import React from 'react';
import styles from './page.module.css';
import environmentData from '@/app/data/ourCompany/environment';
import GridLayout from '@/app/components/ui/gridLayout/gridLayout';
import Image from 'next/image';

const Page = () => {
    return (
        <section className={styles.environment}>
            <div className={styles.hero}>
                <div className={styles.heroHead}>
                    <div className={styles.imgContainer}>
                        <Image src={'/images/environment/hero.jpg'}
                               alt='governance & accountability'
                               width={640}
                               height={480}
                               sizes='100%'
                               className={styles.img} />
                    </div>
                    <div className={styles.floatingContainer}>
                        <h1 className={styles.headingLarge}>environment & impact</h1>
                        <button className={styles.downloadBtn}>read connect & thrive (pdf)</button>
                    </div>
                </div>
                <div className={styles.heroTail}>
                    <h2 className={styles.headingMedium}>connecting sustainably</h2>
                    <p className={styles.textStylish}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dignissimos ipsum excepturi maiores laboriosam reprehenderit, dolorem cumque explicabo doloremque minima temporibus commodi a consequuntur neque harum facilis! Provident, culpa accusamus!
                    Id modi omnis consequuntur, velit error aliquam voluptatum, tenetur veniam molestias accusantium dignissimos quae neque quidem sint, incidunt ea reprehenderit sapiente. Expedita asperiores, possimus necessitatibus officia laudantium cupiditate pariatur libero?
                    Quidem ipsa quo repudiandae debitis placeat quas rem magnam id consequuntur. Provident blanditiis, soluta commodi perferendis non quibusdam debitis labore iste mollitia voluptas inventore ut, aspernatur molestiae, exercitationem iure. Repellat?</p>
                </div>
            </div>

            <div className={styles.gridContainer}>
                {
                    environmentData.map(itm => <GridLayout key={itm.id} item={itm} />)
                }
            </div>
        </section>
    )
}

export default Page;
