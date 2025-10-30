import React from 'react';
import styles from './page.module.css';
import HeroWithTextContainer from '@/app/components/ui/heroWithTextContainer/heroWithTextContainer';
import ProductContainer from '@/app/components/ui/productContainer/productContainer';
import NavigationComponent from '@/app/components/ui/navigationComponent/navigationComponent';
import { hero } from '@/app/data/toolsAndResources/elevatorProducts/elevatorProduts';
import { featuresGrid } from '@/app/data/productsAndServices/modernization-and-upgrades/improvedAesthetics';

const Page = () => {
    return (
        <section className={styles.products}>
            <HeroWithTextContainer hero={hero} />
            <ProductContainer items={featuresGrid} heading='products' />
            <NavigationComponent />
        </section>
    )
}

export default Page
