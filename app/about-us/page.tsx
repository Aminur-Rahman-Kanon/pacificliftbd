import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import GridLayout from '../components/ui/gridLayout/gridLayout';
import { gridLayoutItemData } from '@/app/data/aboutUs';

const Page = () => {
    return (
        <div className={styles.aboutUs}>
            <div className={styles.header}>
                <div className={styles.imgContainer}>
                    <Image src={'/images/aboutUs/hero.jpg'}
                        alt='pacific lift bd'
                        width={640}
                        height={480}
                        sizes='100%'
                        className={styles.img} />
                </div>
                <div className={styles.floatingContainer}>
                    <h1 className={styles.headingLarge}>About Us</h1>
                </div>
            </div>

            <div className={styles.info}>
                <div className={styles.textContainer}>
                    <h2 className={`${styles.headingMediumWithBar} ${styles.black}`}>Made to move you</h2>
                    <p className={styles.textNormal}>
                        We move 2.4 billion people a day and maintain more than ~2.4 million
                        customer units worldwide, the industry’s largest portfolio. We can be found
                        in many of the world’s most recognizable buildings as well as the busiest transportation 
                        hubs and retail centers. We are everywhere people are on the move.
                    </p>

                    <p className={styles.textNormal}>
                        Otis is 72,000 people strong, including 44,000 field professionals, all committed to manufacturing, 
                        installing and maintaining products to meet the diverse needs of our customers.
                    </p>
                </div>

                <div className={styles.links}>
                    <Link href={'#'} className={styles.link}>Annual Report</Link>
                    <Link href={'#'} className={styles.link}>Factsheet</Link>
                </div>
            </div>

            <div className={styles.banner}>
                <div className={styles.imgContainer}>
                    <Image src={'/images/aboutUs/banner.png'}
                           alt='pacific lift bd'
                           width={640}
                           height={480}
                           sizes='100%'
                           className={styles.img} />
                </div>

                <div className={styles.floatingContainer}>
                    <h2 className={`${styles.headingMediumWithBar} ${styles.white}`}>
                        Our success is rooted in our culture of innovation.
                    </h2>
                </div>
            </div>

            <div className={styles.multiCardContainer}>
                <div className={styles.flexCardContainer}>
                    <div className={styles.flexImgContainer}>
                        <Image src={'/images/aboutUs/flex_1.jpg'}
                               alt='our mission'
                               width={640}
                               height={480}
                               sizes='100%'
                               className={styles.flexImg} />
                    </div>
                    <div className={styles.flexTextContainer}>
                        <h2 className={styles.headingMediumWithBar}>our mission</h2>
                        <p className={styles.textNormal}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere laboriosam nesciunt quas omnis libero. Quo eaque provident magni ducimus nobis temporibus, consequatur aliquam, inventore deleniti enim obcaecati omnis labore ea!</p>
                    </div>
                </div>
                <div className={styles.flexCardMiddleContainer}>
                    <div className={`${styles.verticalContainer} ${styles.left}`}>
                        <h2 className={styles.verticalHeadingMedium}>our values</h2>
                    </div>
                    <div className={styles.verticalTextContainer}>
                        <p className={styles.textNormal}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis minus quos temporibus? Aspernatur, eveniet excepturi. Inventore omnis et aliquam magni obcaecati. Quo officia non facilis sed facere, commodi praesentium nesciunt?
                            Nisi qui ratione voluptate assumenda, amet sed culpa eveniet nihil. Impedit magni sapiente nihil sequi mollitia perferendis consequatur dolorum natus iure, minus, ipsam reiciendis, aliquam sed atque tempore voluptatem odit.
                            Provident, aliquam! Earum ea fugiat est, ab recusandae a quis facilis temporibus modi impedit perferendis explicabo aspernatur voluptatum dolor possimus, quos quibusdam voluptate! Fugiat neque voluptatibus optio ipsum ab reprehenderit.
                        </p>
                    </div>
                    <div className={`${styles.verticalContainer} ${styles.right}`}>

                    </div>
                </div>
                <div className={styles.flexCardContainer}>
                    <div className={styles.flexTextContainer}>
                        <h2 className={styles.headingMediumWithBar}>our mission</h2>
                        <p className={styles.textNormal}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere laboriosam nesciunt quas omnis libero. Quo eaque provident magni ducimus nobis temporibus, consequatur aliquam, inventore deleniti enim obcaecati omnis labore ea!</p>
                    </div>
                    <div className={styles.flexImgContainer}>
                        <Image src={'/images/aboutUs/flex_2.jpg'}
                               alt='our mission'
                               width={640}
                               height={480}
                               sizes='100%'
                               className={styles.flexImg} />
                    </div>
                </div>
            </div>
            
            <div className={styles.gridContainer}>
                {
                    gridLayoutItemData.map(grdItm => <GridLayout key={grdItm.id} item={grdItm} />)
                }
            </div>

            <div className={styles.info}>
                <h2 className={`${styles.headingMediumWithBar} ${styles.black}`}>we succeed by being a good corporate citizen</h2>
                <p className={styles.textNormal}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa qui, accusamus, libero optio beatae molestiae sapiente maiores tempore architecto, numquam dolorum quisquam exercitationem perspiciatis rem fugit! Dolorum praesentium quod reprehenderit?</p>
                <Link href={'#'} className={styles.link}>social impact</Link>
            </div>
        </div>
    )
}

export default Page;
