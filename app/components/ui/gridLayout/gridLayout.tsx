'use client';

import React from 'react';
import styles from './gridLayout.module.css';
import GridLayoutType from '@/app/types/gridLayout';
import Link from 'next/link';
import Image from 'next/image';
import useScreenWidth from '@/app/hooks/useScreenWidth';

type Props = {
    item: GridLayoutType
}

function isValidGridItem (item: GridLayoutType): boolean {
    return (
        typeof item === 'object' &&
        item !== null &&
        typeof item.img === 'string' && 
        typeof item.heading === 'string' &&
        typeof item.orientation === 'string' &&
        typeof item.text === 'string'
    )
}

const GridLayout:React.FC<Props> = ({ item }) => {

    const screenWidth = useScreenWidth();

    const isValidItem = isValidGridItem(item);

    const handleImageOrientation = () => {
        if (item.orientation === 'rtl' && screenWidth > 1023){
            return {
                order: 2
            }
        }
        else {
            return {
                order: 1
            }
        }
    }

    const handleTextContainerOrientation = () => {
        if (item.orientation === 'rtl' && screenWidth > 1023){
            return {
                order: 1
            }
        }
        else {
            return {
                order: 2
            }
        }
    }

    if (!isValidItem) return;

    return (
        <section className={styles.gridLayout}>
            <div className={styles.gridItem}>
                <div className={styles.gridImgContainer} style={handleImageOrientation()}>
                    <Image src={item.img}
                        alt='pacific lift bd'
                        width={640}
                        height={480}
                        sizes='100%'
                        className={styles.img} />
                </div>
                <div className={styles.gridTextContainer} style={handleTextContainerOrientation()}>
                    <h2 className={styles.headingMediumNormal}>{item.heading}</h2>
                    <p className={styles.textNormal}>{item.text}</p>
                    {
                        item.textForBtn ? <Link href={'#'} className={styles.link}>{item.textForBtn}</Link>
                        :
                        null
                    }
                </div>
            </div>
        </section>
    )
}

export default GridLayout;
