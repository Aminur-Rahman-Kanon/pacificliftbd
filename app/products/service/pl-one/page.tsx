import React from 'react';
import styles from './page.module.css';
import HeroWithTextContainer from '@/app/components/ui/heroWithTextContainer/heroWithTextContainer';
import { hero1, featureGrid, hero2 } from '@/app/data/pacificOne';
import NavigationComponent from '@/app/components/ui/navigationComponent/navigationComponent';
import FeatureGrid from '@/app/components/ui/featureGrid/featureGrid';
import CardGrid from '@/app/components/ui/cardGrid/cardGrid';
import CustomCarousel from '@/app/components/ui/customCarousel/customCarousel';
import { carouselGrid } from '@/app/data/pacificOne';

const Page = () => {
    return (
        <div className={styles.one}>
            <HeroWithTextContainer hero={hero1} />
            <FeatureGrid item={featureGrid} />
            <HeroWithTextContainer hero={hero2} />
            <CustomCarousel item={carouselGrid} itemToDisplayPerSlides={3} />
            <CardGrid />
            <NavigationComponent />
        </div>
    )
}

export default Page;
