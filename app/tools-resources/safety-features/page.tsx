import React from 'react';
import styles from './page.module.css';
import HeroWithTextContainer from '@/app/components/ui/heroWithTextContainer/heroWithTextContainer';
import FeatureGrid from '@/app/components/ui/featureGrid/featureGrid';
import NavigationComponent from '@/app/components/ui/navigationComponent/navigationComponent';
import { hero, gridLayout } from '@/app/data/safetyFeatures';

const Page = () => {
    return (
        <div className={styles.safetyFeatures}>
            <HeroWithTextContainer hero={hero} />
            <FeatureGrid item={gridLayout} />
            <NavigationComponent />
        </div>
    )
}

export default Page
