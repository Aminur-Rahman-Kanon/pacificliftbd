import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import FeatureSectionWithGridLayout from '@/app/components/ui/featureSectionWithGridLayout/featureSectionWithGridLayout';
import { featureSection1, featureSection2 } from '@/app/data/productsAndServices/service/warrantyManual';
import Link from 'next/link';

const Page = () => {
    return (
        <section className={styles.warrantyManual}>
            <div className={styles.hero}>
                <div className={styles.bg}>
                    <Image src={'/images/warrantyManual/hero.jpg'}
                           alt='warranty manual'
                           width={640}
                           height={480}
                           sizes='100%'
                           className={styles.img} />
                </div>
                <div className={styles.floatingContainer}>
                    <h1 className={styles.headingLarge}>worried about warranty?</h1>
                    <p className={styles.textStylish}>download our easy warranty manual</p>
                    <Link href={'/api/download'} className={styles.downloadBtn}>download warranty manual</Link>
                </div>
            </div>

            <div className={styles.infoContainer}>
                <h2 className={styles.headingMedium}>why confused</h2>
                <p className={styles.textNormal}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quisquam saepe nobis harum ad voluptas odio fuga ipsam velit minus eligendi quidem nam quo beatae incidunt nesciunt molestias, quae adipisci!
                </p>

                <p className={styles.textNormal}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos odit totam dignissimos explicabo voluptatem aliquid fugit eos, qui eveniet vitae quis nesciunt accusantium minima culpa adipisci, deserunt soluta architecto alias!
                    Sit, officiis vero modi quae reprehenderit, tempora dicta repellat quos recusandae aut provident vitae veniam nesciunt vel fugit impedit! Quisquam eum sit quae dolore, placeat dicta! Laboriosam enim eius iure!
                </p>
            </div>

            <FeatureSectionWithGridLayout item={featureSection1} />

            <FeatureSectionWithGridLayout item={featureSection2} />
        </section>
    )
}

export default Page;
