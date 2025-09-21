import React from 'react';
import styles from './page.module.css';
import { productPageSkeleton } from '@/app/data/products';
import { notFound } from 'next/navigation';
import HeroWithTextContainer from '@/app/components/ui/heroWithTextContainer/heroWithTextContainer';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    params: Promise<{ product: string }>
}

const Page:React.FC<Props> = async ({ params }) => {
    const validProducts = ['low-rise-elevator', 'mid-rise-elevator', 'high-rise-elevator']
    //will require product id as params and
    //we will use it as a key to fetch data from the dataset ( productPageSkeleton );
    const { product } = await params;

    const productToLoad = productPageSkeleton[product];

    if ( !product || !validProducts.includes(product) || !productToLoad ){
        notFound();
    }
    

    return (
        <div className={styles.page}>
            <HeroWithTextContainer hero={productToLoad.hero} />

            <div className={styles.flexColumn}>
                <h2 className={styles.headingMedium}>{productToLoad.products.heading}</h2>
                <div className={styles.gridContainer}>
                    {
                        productToLoad.products.products.map(prd => <div key={prd.id} className={styles.gridItem}>
                            <div className={styles.gridTop}>
                                <Image src={prd.img}
                                       alt={prd.heading}
                                       width={400}
                                       height={400}
                                       sizes='100%'
                                       className={styles.img} />
                            </div>
                            <div className={styles.gridBottom}>
                                <h3 className={styles.headingSmall}>{prd.heading}</h3>
                                <Link href={prd.link.href} className={styles.link}>{prd.link.text}</Link>
                            </div>
                        </div>)
                    }
                </div>
            </div>

            <div className={`${styles.flexColumn} ${styles.customWidth}`}>
                <h2 className={styles.headingMedium}>{productToLoad['text-container-2'].heading}</h2>
                {
                    productToLoad['text-container-2'].text.map((txt, idx) => <p key={idx} className={styles.textStylish}>{txt}</p>)
                }
                <Link href={productToLoad['text-container-2'].link.href} className={styles.link}>{
                    productToLoad['text-container-2'].link.text
                }</Link>
            </div>

            <div className={styles.gridContainerSmall}>
                {
                    productToLoad.navigations.map(nav => <div key={nav.id} className={styles.gridItem}>
                        <div className={styles.gridTop}>
                            <Image src={nav.img}
                                   alt={nav.heading}
                                   width={400}
                                   height={400}
                                   sizes='100%'
                                   className={styles.img} />
                        </div>
                        <h3 className={styles.headingSmall}>{nav.heading}</h3>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Page;
 