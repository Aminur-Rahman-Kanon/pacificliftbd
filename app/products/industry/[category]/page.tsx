import React from 'react';
import styles from './page.module.css';
import industryPageData from '@/app/data/industry';
import HeroWithTextContainer from '@/app/components/ui/heroWithTextContainer/heroWithTextContainer';
import TextContainer from '@/app/components/ui/textContainer/textContainer';
import ProductContainer from '@/app/components/ui/productContainer/productContainer';
import NavigationContainer from '@/app/components/ui/navigationContainer/navigationContainer';

type Props = {
    params: Promise<{ category: string }>
}

const Page:React.FC<Props> = async ({ params }) => {
    const pages = [
        'residential', 'retail', 'office', 'hospital', 'hotel', 'multi-use-building', 'infrastructure', 'global-project'
    ]

    const { category } = await params;

    const pageToLoad = industryPageData[category];

    const heading = Object.keys(industryPageData).find(itm => itm === category);
    console.log(heading)

    if (!category || !pages.includes(category) || !pageToLoad || !heading) return;

    return (
        <div className={styles.container}>
            <HeroWithTextContainer hero={pageToLoad.hero} />
            <TextContainer item={pageToLoad['text-container-1']}/>
            <TextContainer item={pageToLoad['text-container-2']}/>
            <ProductContainer items={pageToLoad.products} heading={heading} />
            <NavigationContainer navigationItem={pageToLoad.navigation} />
        </div>
    )
}

export default Page
