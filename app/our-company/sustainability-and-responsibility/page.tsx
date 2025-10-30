import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import GridLayout from '../components/ui/gridLayout/gridLayout';
import sustainabilityData from '@/app/data/ourCompany/sustainabilityResponsibility';

const Page = () => {
    return (
        <section className={styles.sustainability}>
            <div className={styles.hero}>
                <div className={styles.heroHead}>
                    <div className={styles.imgContainer}>
                        <Image src={'/images/sustainability/hero.jpg'}
                            alt='sustainability'
                            width={640}
                            height={480}
                            sizes='100%'
                            className={styles.img} />
                    </div>
                    <div className={styles.floatingContainer}>
                        <h1 className={styles.headingLarge}>sustainability & responsibility</h1>
                        <button className={styles.downloadBtn}>download our policy</button>
                    </div>
                </div>
                <div className={styles.textContainer}>
                    <p className={styles.textNormal}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquam explicabo quisquam beatae natus incidunt dignissimos quam corrupti minus ab fuga nostrum eveniet earum placeat, doloremque sed ullam ipsum tempore.
                        Reprehenderit esse dolores incidunt accusamus velit voluptas itaque ipsa, nemo id animi, temporibus veniam eum tempora molestiae quae, maxime laborum natus possimus! Ducimus saepe, omnis earum impedit optio tempora architecto!
                    </p>
                    <p className={styles.textNormal}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt saepe magnam nulla sint enim consequuntur ducimus quis temporibus obcaecati reiciendis, officia cupiditate, provident nihil. Iste nostrum delectus labore necessitatibus in.
                    </p>
                </div>
            </div>

            <div className={styles.gridContainer}>
                {
                    sustainabilityData.map(itm => <GridLayout key={itm.id} item={itm} />)
                }
            </div>

            <div className={styles.info}>
                <div className={styles.gridImgContainer}>
                    <Image src={'/images/sustainability/info.png'}
                           alt='pacific lift bd ceo'
                           width={640}
                           height={480}
                           sizes='100%'
                           className={styles.img} />
                </div>
                <div className={styles.gridTextContainer}>
                    <h2 className={styles.headingMedium}>&quot;With our vision as our guide, we proudly give people freedom to connect and thrive. In doing so, we will leave an enduring mark on the world.&quot;</h2>
                    <h4 className={styles.headingSmallBold}>-Azizur Rahaman</h4>
                    <h4 className={styles.headingSmall}>Chair, Chief Executive Officer and President</h4>
                </div>
            </div>
        </section>
    )
}

export default Page;
