'use client';

import React from 'react';
import styles from './featureSectionWithGridLayout.module.css';
import FeatureSectionGridLayoutType from '@/app/types/featureSectionGridLayout';
import Image from 'next/image';
import useScreenWidth from '@/app/hooks/useScreenWidth';

type Props = {
    item: FeatureSectionGridLayoutType
}

type ElementOrder = {
    infoContainerOrder: number | string,
    imgContainerOrder: number | string
}

const FeatureSectionWithGridLayout:React.FC<Props> = ({ item }) => {

    const screenWidth = useScreenWidth();

    if (!item) return;

    //this function changes the order of image and info container based on image order and screen width
    function imageOrderHandler(): ElementOrder{
        if (!item.imgPosition) return { infoContainerOrder: 'unset', imgContainerOrder: 'unset' };

        switch (item.imgPosition){
            case 'left':
                if (screenWidth > 1023){
                    return { imgContainerOrder: 1, infoContainerOrder: 2 }
                }
                if (screenWidth < 1023){
                    return { imgContainerOrder: 1, infoContainerOrder: 2 }
                }

            case 'right':
                if (screenWidth > 1023){
                    return { imgContainerOrder: 2, infoContainerOrder: 1 }
                }
                if (screenWidth < 1023){
                    return { imgContainerOrder: 1, infoContainerOrder: 2 }
                }

            default:
                return { imgContainerOrder: 'unset', infoContainerOrder: 'unset' }
        }
    }

    const { imgContainerOrder, infoContainerOrder } = imageOrderHandler();

    return (
        <section className={styles.featureSectionWithGridLayout} id={item.id}>
            <div className={styles.imgContainer} style={{ order: imgContainerOrder }}>
                <Image src={item.backgroundImg}
                       alt={item.heading}
                       width={640}
                       height={427}
                       sizes='100%'
                       className={styles.img} />
            </div>

            <div className={styles.infoContainer} style={{ order: infoContainerOrder }}>
                <h2 className={styles.headingMedium}>{item.heading}</h2>
                {
                    item.text.map(txt => <p key={txt.id} className={styles.textNormal}>{txt.text}</p>)
                }
                <div className={styles.gridContainer}>
                    {
                        item.gridLayout?.map(grdItm => <div key={grdItm.id} className={styles.gridItem}>
                            <div className={styles.gridImgContainer}>
                                <Image src={grdItm.img}
                                       alt={grdItm.text}
                                       width={70}
                                       height={70}
                                       sizes='100%'
                                       className={styles.icon}/>
                            </div>
                            <p className={styles.gridText}>{grdItm.text}</p>
                        </div>)
                    }
                </div>
            </div>
        </section>
    )
}

export default FeatureSectionWithGridLayout;
