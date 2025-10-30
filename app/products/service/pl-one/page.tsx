import React from 'react';
import styles from './page.module.css';
import HeroWithTextContainer from '@/app/components/ui/heroWithTextContainer/heroWithTextContainer';
import { hero1, featureGrid, hero2 } from '@/app/data/productsAndServices/service/pacificOne';
import NavigationComponent from '@/app/components/ui/navigationComponent/navigationComponent';
import CardGrid from '@/app/components/ui/cardGrid/cardGrid';
import CustomCarousel from '@/app/components/ui/customCarousel/customCarousel';
import { carouselGrid } from '@/app/data/productsAndServices/service/pacificOne';
import Image from 'next/image';

const Page = () => {
    return (
        <div className={styles.one}>
            <HeroWithTextContainer hero={hero1} />

            <div className={styles.gridLayout}>
                {
                    featureGrid.map(itm => <div key={itm.id} className={styles.gridItem}>
                        <div className={styles.iconContainer}>
                            <Image src={itm.img}
                                alt={itm.heading}
                                width={80}
                                height={80}
                                sizes='100%'
                                className={styles.icon} />
                        </div>

                        <h3 className={styles.headingSmall}>{itm.heading}</h3>
                    </div>)
                }
            </div>

            <HeroWithTextContainer hero={hero2} />
            <CustomCarousel item={carouselGrid} itemToDisplayPerSlides={3} />
            <CardGrid />
            <NavigationComponent />
        </div>
    )
}

export default Page;
