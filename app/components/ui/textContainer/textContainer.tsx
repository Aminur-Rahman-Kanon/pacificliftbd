'use client';

import React from 'react';
import styles from './textContainer.module.css';
import TextContainerType from '@/app/types/textContainer';
import Link from 'next/link';

type Props = {
    item: TextContainerType
}

const TextContainer:React.FC<Props> = ({ item }) => {

    if (!item) return;

    const link = item.link ? <Link href={item.link.href} className={styles.link}>{item.link.text}</Link> : null

    return (
        <div className={styles.flexColumn} id={item.id}>
            <h2 className={styles.headingMedium}>{item.heading}</h2>
            <div className={styles.flexColumn}>
                {
                    item.text.map((txt, idx) => <p key={idx} className={styles.textNormal}>{txt}</p>)
                }
            </div>
            {
                link
            }
        </div>
    )
}

export default TextContainer;
