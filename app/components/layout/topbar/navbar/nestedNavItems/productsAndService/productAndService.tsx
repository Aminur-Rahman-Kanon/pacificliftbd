import React from 'react';
import styles from './productsAndService.module.css';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const ProductAndServices = () => {
    return (
        <section className={styles.productAndService}>
            <ArrowLeft size={20} color='black' className={styles.arrow}/>
            <div className={styles.gridContainer}>
                <div className={styles.gridItem}>
                    <h3 className={styles.headingSmall}>by products</h3>
                    <ul className={styles.content}>
                        <li className={styles.list}>
                            <Link href={'#'} className={styles.link}>low-rise elevators</Link>
                        </li>
                        <li className={styles.list}>
                            <Link href={'#'} className={styles.link}>mid-rise elevators</Link>
                        </li>
                        <li className={styles.list}>
                            <Link href={'#'} className={styles.link}>high-rise elevators</Link>
                        </li>
                        <li className={styles.list}>
                            <Link href={'#'} className={styles.link}>escalators & moving walks</Link>
                        </li>
                        <li className={styles.list}>
                            <Link href={'#'} className={styles.link}>dispatching</Link>
                        </li>
                        <li className={styles.list}>
                            <Link href={'#'} className={styles.link}>our awards & honors</Link>
                        </li>
                        <li className={styles.list}>
                            <Link href={'#'} className={styles.link}>EPDs</Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.gridItem}>
                    <h3 className={styles.headingSmall}>by industry</h3>
                    <ul className={styles.content}>
                        <li className={styles.list}>
                            <Link href={'#'} className={styles.link}>industry</Link>
                        </li>
                        <li className={styles.list}>
                            <Link href={'#'} className={styles.link}>retails</Link>
                        </li>
                        <li className={styles.list}>
                            <Link href={'#'} className={styles.link}>office</Link>
                        </li>
                        <li className={styles.list}>
                            <Link href={'#'} className={styles.link}>hospital</Link>
                        </li>
                        <li className={styles.list}>
                            <Link href={'#'} className={styles.link}>hotel</Link>
                        </li>
                        <li className={styles.list}>
                            <Link href={'#'} className={styles.link}>multi-use buildings</Link>
                        </li>
                        <li className={styles.list}>
                            <Link href={'#'} className={styles.link}>infrastructure</Link>
                        </li>
                        <li className={styles.list}>
                            <Link href={'#'} className={styles.link}>global projects</Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.gridItem}>
                    <h3 className={styles.headingSmall}>service</h3>
                    <ul className={styles.content}>
                        <li className={styles.list}>
                            <Link href={'#'} className={styles.link}>pacific lift BD signature service</Link>
                        </li>
                        <li className={styles.list}>
                            <Link href={'#'} className={styles.link}>new elevator warranty manual</Link>
                        </li>
                        <li className={styles.list}>
                            <Link href={'#'} className={styles.link}>service contract selector</Link>
                        </li>
                        <li className={styles.list}>
                            <Link href={'#'} className={styles.link}>pacific lift BD hotline</Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.gridItem}>
                    <h3 className={styles.headingSmall}>modernization & upgrades</h3>
                    <ul className={styles.content}>
                        <li className={styles.list}>
                            <Link href={'#'} className={styles.link}>modernization</Link>
                        </li>
                        <li className={styles.list}>
                            <Link href={'#'} className={styles.link}>passenger experience</Link>
                        </li>
                        <li className={styles.list}>
                            <Link href={'#'} className={styles.link}>improved aesthetics</Link>
                        </li>
                        <li className={styles.list}>
                            <Link href={'#'} className={styles.link}>upgrades & replacements</Link>
                        </li>
                        <li className={styles.list}>
                            <Link href={'#'} className={styles.link}>health & safety products</Link>
                        </li>
                        <li className={styles.list}>
                            <Link href={'#'} className={styles.link}>elevator management system</Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.gridItem}>
                    <h3 className={styles.headingSmall}>hotline</h3>
                    <ul className={styles.content}>
                        <li className={styles.list}>
                            <a href='tel:008801913777565' className={styles.link}>+8801913777565</a>
                        </li>
                        <li className={styles.list}>
                            <a href='mailto:kanon754@gmail.com' className={styles.link}>pacificliftbd@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ProductAndServices;
