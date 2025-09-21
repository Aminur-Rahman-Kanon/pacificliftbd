import React from 'react';
import styles from './page.module.css';

type Props = {
    params: Promise<{ product: string }>
}

const Page:React.FC<Props> = async ({ params }) => {

    const { product } = await params;

    console.log(product);

    return (
        <div className={styles.page}>
        
        </div>
    )
}

export default Page;
