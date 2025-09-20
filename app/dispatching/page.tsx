import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import { gridContainerData, newspaperLayoutItemData } from '../data/dispatching';
import GridLayout from '../components/ui/gridLayout/gridLayout';
import Link from 'next/link';
import NewspaperLayout from '../components/ui/newspaperLayout/newspaperLayout';

const Page = () => {
    return (
        <section className={styles.dispatching}>
            <div className={styles.hero}>
                <div className={styles.imgContainer}>
                    <Image src={'/images/dispatching/hero.jpg'}
                           alt='dispaching'
                           width={640}
                           height={480}
                           sizes='100%'
                           className={styles.img} />
                </div>
                <div className={styles.floatingContainer}>
                    <h1 className={styles.headingLarge}>dispatching</h1>
                </div>
            </div>

            <div className={styles.stylishTextContainer}>
                <h2 className={styles.headingMedium}>you&quot;re in control</h2>
                <p className={styles.textStylish}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, eligendi nulla. Pariatur officia accusamus laborum repellendus dicta neque rerum cumque, fugit officiis dolorum, numquam similique rem, nesciunt voluptatem totam nulla!
                Quidem id reprehenderit, et aliquid consequuntur maiores enim alias numquam quibusdam doloribus blanditiis expedita, error impedit incidunt iure esse nisi saepe illo asperiores optio quae? Alias sed saepe laudantium modi!
                Animi quo, temporibus veniam, iste accusantium reiciendis eius quis vitae debitis perferendis consectetur tempora vel soluta distinctio suscipit veritatis. Quaerat voluptate adipisci hic odit accusantium, cum a non in sequi.</p>
            </div>

            <div className={styles.gridContainer}>
                {
                    gridContainerData.map(itm => <div className={styles.gridItem}>
                        <div className={styles.top}>
                            <div className={styles.gridImgContainer}>
                                <Image src={itm.img}
                                    alt={itm.heading}
                                    width={300}
                                    height={300}
                                    sizes='100%'
                                    className={styles.img} />
                            </div>
                        </div>
                        <div className={styles.textContainer}>
                            <h3 className={styles.headingSmall}>{itm.heading}</h3>
                            <p className={styles.textNormal}>{itm.text}</p>
                            <Link href={itm.href} className={styles.link}>{itm.textForLink}</Link>
                        </div>
                    </div>)
                }
            </div>

            <div className={styles.stylingFlexContainer}>
                <NewspaperLayout items={newspaperLayoutItemData.items}/>
            </div>

            <div className={styles.gridContainerSmall}>
                <div className={styles.gridSmallItem}>
                    <div className={styles.smallImgContainer}>
                        <Image src={'/images/dispatching/flex_1.jpg'}
                               alt='pacific lift create'
                               width={200}
                               height={200}
                               sizes='100%'
                               className={styles.img} />
                    </div>
                    
                    <h3 className={styles.headingSmall}>pacific lift create</h3>
                </div>
                <div className={styles.gridSmallItem}>
                    <div className={styles.smallImgContainer}>
                        <Image src={'/images/dispatching/flex_2.jpg'}
                               alt='pacific lift create'
                               width={200}
                               height={200}
                               sizes='100%'
                               className={styles.img} />
                    </div>
                    
                    <h3 className={styles.headingSmall}>contact us</h3>
                </div>
            </div>
        </section>
    )
}

export default Page;
