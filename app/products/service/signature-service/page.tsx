import React from 'react';
import styles from './page.module.css';
import Hero from '@/app/components/ui/hero/hero';
import { hero1, hero2, featureSectionWithGridLayout1, featureSectionWithGridLayout2 } from '@/app/data/productsAndServices/service/signatureService';
import Link from 'next/link';
import FeatureSectionWithGridLayout from '@/app/components/ui/featureSectionWithGridLayout/featureSectionWithGridLayout';
import Image from 'next/image';
import NavigationComponent from '@/app/components/ui/navigationComponent/navigationComponent';

const Page = () => {
    return (
        <section className={styles.signatureService}>
            <Hero item={hero1} />

            <div className={styles.infoContainer}>
                <h2 className={styles.headingMedium}>Discover a smarter vision of service</h2>
                <p className={styles.textStylish}>Otis Signature Service combines modern intelligence with a legacy of commitment to deliver you with a more personalized service experience.</p>
                <Link href={'#'} className={styles.link}>download brochure</Link>
            </div>

            <FeatureSectionWithGridLayout item={featureSectionWithGridLayout1} />

            <Hero item={hero2} />

            <div className={styles.infoWithGridContainer}>
                <h2 className={styles.headingMediumNormal}>a more personalized experience</h2>
                <p className={styles.textNormal}>we put you and your passengers at the center of everything we do</p>
                <div className={styles.gridContainer}>
                    <div className={styles.gridItem}>
                        <Image src={'/images/products/service/signature/flexibility.png'}
                               alt='flexibility'
                               width={70}
                               height={70}
                               sizes='100%'
                               className={styles.icon} />

                        <h3 className={styles.headingSmall}>personalized contracts</h3>
                        <p className={styles.textSmall}>Flexible service packages offer maintenance and connectivity options to suit your needs.</p>
                    </div>
                    <div className={styles.gridItem}>
                        <Image src={'/images/products/service/signature/planner.png'}
                               alt='planner'
                               width={70}
                               height={70}
                               sizes='100%'
                               className={styles.icon} />

                        <h3 className={styles.headingSmall}>capital planner</h3>
                        <p className={styles.textSmall}>Tailored recommendations help you avoid surprises, increase product lifespans and plan for the future.</p>
                    </div>
                </div>
            </div>

            <FeatureSectionWithGridLayout item={featureSectionWithGridLayout2} />

            <NavigationComponent />
        </section>
    )
}

export default Page;
