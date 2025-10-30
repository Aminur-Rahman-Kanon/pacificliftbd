import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import leadershipData from '@/app/data/ourCompany/leadership';

const Page = () => {
    return (
        <section className={styles.leadership}>
            <div className={styles.hero}>
                <div className={styles.heroHead}>
                    <div className={styles.imgContainer}>
                        <Image src={'/images/leadership/hero.jpg'}
                               alt='leadership'
                               width={640}
                               height={480}
                               sizes='100%'
                               className={styles.img} />
                    </div>
                    <div className={styles.floatingContainer}>
                        <h1 className={styles.headingLarge}>our leadership</h1>
                    </div>
                </div>
                <div className={styles.heroTail}>
                    <h2 className={styles.headingMedium}>our executive team</h2>
                    <p className={styles.textStylish}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati deleniti dolorem delectus expedita maiores! Placeat ipsa consectetur voluptates voluptate amet debitis corporis nemo, dolores quia, ullam odio nobis natus porro.
                        Quod asperiores aut reprehenderit in vero qui blanditiis sit dolores esse consectetur. Soluta numquam eaque voluptatibus sit? Libero odit autem repellat quas dolores dolorum ab doloremque magnam? Cum, voluptatibus cumque.
                        Iure sunt, debitis ipsa numquam unde asperiores voluptates? Voluptas nostrum aperiam ipsum nam voluptates, voluptate eligendi neque error vel minus? Alias ullam vitae dolor similique adipisci consequuntur cum commodi nemo.
                    </p>
                </div>
            </div>

            <div className={styles.gridContainer}>
                {
                    leadershipData.map(itm => <div key={itm.id} className={styles.gridItem}>
                        <div className={styles.gridImgContainer}>
                            <Image src={itm.img}
                                   alt='leadership'
                                   width={300}
                                   height={300}
                                   sizes='100%'
                                   className={styles.gridImg} />
                        </div>
                        <div className={styles.gridTail}>
                            <h3 className={styles.headingSmall}>{itm.name}</h3>
                            <p className={styles.textSmall}>{itm.title}</p>
                        </div>
                    </div>)
                }
            </div>
        </section>
    )
}

export default Page;
