import React from 'react';
import styles from './page.module.css';
import HeroWithTextContainer from '@/app/components/ui/heroWithTextContainer/heroWithTextContainer';
import FeatureGrid from '@/app/components/ui/featureGrid/featureGrid';
import { hero, featuresGrid } from '@/app/data/productsAndServices/modernization-and-upgrades/improvedAesthetics';
import NavigationComponent from '@/app/components/ui/navigationComponent/navigationComponent';
import Link from 'next/link';
import Image from 'next/image';

const Page = () => {
    return (
        <div className={styles.improveAesthetics}>
            <HeroWithTextContainer hero={hero} />

            <div className={styles.flexContainer}>
                <h3 className={styles.headingSmall}>products</h3>
                <FeatureGrid item={featuresGrid} />
            </div>
            <div className={styles.infoWithHero}>
                <div className={styles.info}>
                    <h2 className={styles.headingMedium}>compass 360</h2>
                    <p className={styles.text}>stylish smart and simple</p>
                    <p className={styles.text}>Now in its third generation, our advanced compass dispatching system featuring an enhanced dispatching algorithm, newly designed fixtures featuring new way-finding signage and state of the art capacitive touch technology with our new touchscreen entry devices.</p>
                    <Link href={'#'} className={styles.link}>explore compass 360</Link>
                </div>
                <div className={styles.hero}>
                    <div className={styles.bgContainer}>
                        <Image src={'/images/products/modernization/improvedAesthetics/feature_5.jpg'}
                               alt='hero'
                               width={640}
                               height={480}
                               sizes='100%'
                               className={styles.bg} />
                    </div>
                    <div className={styles.floatingContainer}>
                        <h2 className={styles.headingMediumStylish}>art in motion</h2>
                        <p className={styles.textWhite}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, delectus consequatur! Quia rerum ullam aliquam, ad qui porro doloribus, soluta incidunt doloremque eligendi magni placeat, repellendus architecto nesciunt quod. Iste!</p>
                        <Link href={'#'} className={styles.link}>visit pacific lift create</Link>
                    </div>
                </div>
            </div>
            <NavigationComponent />
        </div>
    )
}

export default Page;
