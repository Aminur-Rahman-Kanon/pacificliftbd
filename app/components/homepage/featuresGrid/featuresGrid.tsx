import React from 'react';
import styles from './featuresGrid.module.css';
import Image from 'next/image';
import Link from 'next/link';

const FeaturesGrid = () => {
    return (
        <div className={styles.featuresGrid}>
            <div className={styles.container}>
                <div className={styles.imgContainer}>
                    <Image src={'/images/others/f1.jpg'}
                           alt='superior customer service'
                           width={120}
                           height={80}
                           sizes='100%'
                           className={styles.img} />
                </div>
                <div className={styles.footer}>
                    <div className={styles.footerHead}>
                        <h2 className={styles.headingSmall}>Superior customer service</h2>
                        <p className={styles.textNormal}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quisquam quia iusto aliquam reiciendis, laborum deleniti porro quasi doloribus beatae asperiores dignissimos. Ex, culpa enim iste repellendus possimus labore ducimus!
                        Error quod expedita animi aliquid omnis laboriosam sit inventore sapiente cum pariatur nulla velit quia fuga, earum, iste, a nam ipsam magni? Magni pariatur, voluptatum illo perspiciatis dolore nemo nostrum?</p>
                    </div>
                    <Link href={'#'} className={styles.link}>Explore Services</Link>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.imgContainer}>
                    <Image src={'/images/others/f2.jpg'}
                           alt='modernization solutions'
                           width={120}
                           height={80}
                           sizes='100%'
                           className={styles.img} />
                </div>
                <div className={styles.footer}>
                    <div className={styles.footerHead}>
                        <h2 className={styles.headingSmall}>Modernization solutions</h2>
                        <p className={styles.textNormal}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quisquam quia iusto aliquam reiciendis, laborum deleniti porro quasi doloribus beatae asperiores dignissimos. Ex, culpa enim iste repellendus possimus labore ducimus!
                        Error quod expedita animi aliquid omnis laboriosam sit inventore sapiente cum pariatur nulla velit quia fuga, earum, iste, a nam ipsam magni? Magni pariatur, voluptatum illo perspiciatis dolore nemo nostrum?</p>
                    </div>
                    <Link href={'#'} className={styles.link}>Explore Modernsization</Link>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.imgContainer}>
                    <Image src={'/images/others/f3.jpg'}
                           alt='join pacific lift bd'
                           width={120}
                           height={80}
                           sizes='100%'
                           className={styles.img} />
                </div>
                <div className={styles.footer}>
                    <div className={styles.footerHead}>
                        <h2 className={styles.headingSmall}>Join Pacific Lift BD</h2>
                        <p className={styles.textNormal}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quisquam quia iusto aliquam reiciendis, laborum deleniti porro quasi doloribus beatae asperiores dignissimos. Ex, culpa enim iste repellendus possimus labore ducimus!
                        Error quod expedita animi aliquid omnis laboriosam sit inventore sapiente cum pariatur nulla velit quia fuga, earum, iste, a nam ipsam magni? Magni pariatur, voluptatum illo perspiciatis dolore nemo nostrum?</p>
                    </div>
                    <Link href={'#'} className={styles.link}>Explore Careers</Link>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.imgContainer}>
                    <Image src={'/images/others/f4.jpg'}
                           alt='investors'
                           width={120}
                           height={80}
                           sizes='100%'
                           className={styles.img} />
                </div>
                <div className={styles.footer}>
                    <div className={styles.footerHead}>
                        <h2 className={styles.headingSmall}>Investors</h2>
                        <p className={styles.textNormal}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quisquam quia iusto aliquam reiciendis, laborum deleniti porro quasi doloribus beatae asperiores dignissimos. Ex, culpa enim iste repellendus possimus labore ducimus!
                        Error quod expedita animi aliquid omnis laboriosam sit inventore sapiente cum pariatur nulla velit quia fuga, earum, iste, a nam ipsam magni? Magni pariatur, voluptatum illo perspiciatis dolore nemo nostrum?</p>
                    </div>
                    <Link href={'#'} className={styles.link}>Explore investors</Link>
                </div>
            </div>
        </div>
    )
}

export default FeaturesGrid;
