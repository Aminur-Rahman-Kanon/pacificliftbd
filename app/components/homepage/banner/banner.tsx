import React from 'react';
import styles from './banner.module.css';
import Image from 'next/image';

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.imgContainer}></div>

            <div className={styles.footer}>
                <h1 className={styles.headingLarge}>Innovative Products</h1>
                <p className={styles.textNormal}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolor non distinctio autem eum cupiditate repellat vitae quae porro totam rerum suscipit, libero ea impedit, asperiores a dicta iure sequi.</p>
                <button className={styles.btn}>Explore Products</button>
            </div>
        </div>
    )
}

export default Banner;
