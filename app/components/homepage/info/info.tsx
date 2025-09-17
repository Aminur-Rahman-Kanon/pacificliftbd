import React from 'react';
import styles from './info.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Info = () => {
    return (
        <div className={styles.info}>
            <div className={styles.imgContainer}>
                <Image src='/images/others/map.jpg'
                       alt='world map'
                       width={640}
                       height={480}
                       sizes='100%'
                       className={styles.img} />
            </div>

            <div className={styles.banner}>
                <h1 className={styles.headingLarge}>
                    We are the world’s leading company for elevator and escalator manufacturing, installation and service
                </h1>

                <p className={styles.textNormal}>
                    We move 2.4 billion people a day and we maintain ~2.4 million customer 
                    units worldwide - the world’s largest portfolio. We can be found in many
                    of the world’s most recognizable buildings as well as the busiest transportation 
                    hubs and retail centers. We are everywhere people are on the move.
                </p>

                <Link href='#' className={styles.link}>our company`</Link>
            </div>
        </div>
    )
}

export default Info;
