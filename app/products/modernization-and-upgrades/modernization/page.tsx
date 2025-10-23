import React from 'react';
import styles from './page.module.css';
import HeroWithTextContainer from '@/app/components/ui/heroWithTextContainer/heroWithTextContainer';
import { hero, simpleGridLayout, prime, plus, pro } from '@/app/data/modernization';
import SimpleGridLayout from '@/app/components/ui/simpleGridLayout/simpleGridLayout';
import FeatureSectionWithGridLayout from '@/app/components/ui/featureSectionWithGridLayout/featureSectionWithGridLayout';

const Page = () => {
    return (
        <section className={styles.modernization}>
            <HeroWithTextContainer hero={hero} />
            <SimpleGridLayout item={simpleGridLayout} />

            <div className={styles.flexLayout}>
                <h2 className={styles.headingMedium}>scallable project</h2>
                <FeatureSectionWithGridLayout item={prime} />
                <FeatureSectionWithGridLayout item={plus} />
                <FeatureSectionWithGridLayout item={pro} />
            </div>
        </section>
    )
}

export default Page;
