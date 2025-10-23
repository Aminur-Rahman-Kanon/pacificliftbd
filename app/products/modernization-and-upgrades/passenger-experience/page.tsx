import React from 'react';
import styles from './page.module.css';
import { hero, featureContainer1, featureContainer2 } from '@/app/data/passenger';
import HeroWithTextContainer from '@/app/components/ui/heroWithTextContainer/heroWithTextContainer';
import FeatureSectionWithGridLayout from '@/app/components/ui/featureSectionWithGridLayout/featureSectionWithGridLayout';
import NavigationComponent from '@/app/components/ui/navigationComponent/navigationComponent';

const Page = () => {
    return (
        <div className={styles.passenger}>
            <HeroWithTextContainer hero={hero} />
            <FeatureSectionWithGridLayout item={featureContainer1} />
            <FeatureSectionWithGridLayout item={featureContainer2} />
            <NavigationComponent />
        </div>
    )
}

export default Page;
