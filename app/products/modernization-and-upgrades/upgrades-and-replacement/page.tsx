import React from 'react';
import styles from './page.module.css';
import HeroWithTextContainer from '@/app/components/ui/heroWithTextContainer/heroWithTextContainer';
import FeatureSectionWithGridLayout from '@/app/components/ui/featureSectionWithGridLayout/featureSectionWithGridLayout';
import FeatureGrid from '@/app/components/ui/featureGrid/featureGrid';
import { hero, featureSection, gridLayout } from '@/app/data/productsAndServices/modernization-and-upgrades/upgrades';
import NavigationComponent from '@/app/components/ui/navigationComponent/navigationComponent';

const Page = () => {
    return (
        <div className={styles.upgrades}>
            <HeroWithTextContainer hero={hero} />
            <FeatureSectionWithGridLayout item={featureSection} />
            <FeatureGrid item={gridLayout} />
            <NavigationComponent />
        </div>
    )
}

export default Page
