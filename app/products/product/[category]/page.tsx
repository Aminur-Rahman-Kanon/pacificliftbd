import React from 'react';
import styles from './page.module.css';
import { productPageSkeleton } from '@/app/data/productsAndServices/products/products';
import { notFound } from 'next/navigation';
import HeroWithTextContainer from '@/app/components/ui/heroWithTextContainer/heroWithTextContainer';
import TextContainer from '@/app/components/ui/textContainer/textContainer';
import ProductContainer from '@/app/components/ui/productContainer/productContainer';
import NavigationContainer from '@/app/components/ui/navigationContainer/navigationContainer';

type Props = {
    params: Promise<{ category: string }>
}

const Page:React.FC<Props> = async ({ params }) => {
    const validProducts = ['low-rise-elevator', 'mid-rise-elevator', 'high-rise-elevator']
    //will require product id as params and
    //we will use it as a key to fetch data from the dataset ( productPageSkeleton );
    const { category } = await params;

    const productToLoad = productPageSkeleton[category];

    const heading = Object.keys(productPageSkeleton).find(prd =>  prd === category)

    if ( !category || !validProducts.includes(category) || !productToLoad || !heading){
        notFound();
    }
    

    return (
        <div className={styles.page}>
            <HeroWithTextContainer hero={productToLoad.hero} />
            <ProductContainer items={productToLoad.products.products} heading={heading} />
            <TextContainer item={productToLoad['text-container']}/>
            <NavigationContainer navigationItem={productToLoad.navigations} />
        </div>
    )
}

export default Page;
 