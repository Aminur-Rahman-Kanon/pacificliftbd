'use client';

import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.logo}>
                    <Image src={'/images/logo/logo_8.png'}
                        alt='pacific lift BD'
                        width={100}
                        height={100}
                        sizes='100%'
                        className={styles.img} />
                </div>
                <div className={styles.socialLinks}>
                    <Link href={'#'} className={styles.socialLink}>
                        <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
                    </Link>
                    <Link href={'#'} className={styles.socialLink}>
                        <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
                    </Link>
                    <Link href={'#'} className={styles.socialLink}>
                        <FontAwesomeIcon icon={faYoutube} className={styles.icon} />
                    </Link>
                    <Link href={'#'} className={styles.socialLink}>
                        <FontAwesomeIcon icon={faTiktok} className={styles.icon} />
                    </Link>
                </div>
                <div className={styles.contact}>
                    <p className={styles.textNormal}><strong>head office:</strong> 17 (old-14) north kutubkhali khan super market, jatrabari, dhaka 1236</p>
                    <p className={styles.textNormal}><strong>warehouse:</strong> b/75 malibag, chowdhurypara, dhaka-1100</p>
                </div>
                <span className={styles.textBold}>Pacific Lift BD All right Reserved</span>
            </div>

            <div className={styles.bottom}>
                <div className={styles.inputContainer}>
                    <input type='email'
                           placeholder='Email address'
                           className={styles.input} />
                    <button className={styles.submitBtn}>
                        <FontAwesomeIcon icon={faArrowRight} className={styles.btnIcon} />
                    </button>
                </div>
                <div className={styles.listContainer}>
                    <div className={styles.lists}>
                        <Link href={'/about-us'} className={styles.listLink}>about us</Link>
                        <Link href={'#'} className={styles.listLink}>history</Link>
                        <Link href={'#'} className={styles.listLink}>innovation</Link>
                        <Link href={'#'} className={styles.listLink}>leadership</Link>
                        <Link href={'#'} className={styles.listLink}>board of director</Link>
                        <Link href={'/sustainability-and-responsibility'} className={styles.listLink}>sustainability & responsibility</Link>
                    </div>
                    <div className={styles.lists}>
                        <Link href={'/health-and-safety'} className={styles.listLink}>health & safety</Link>
                        <Link href={'/governance-and-accountability'} className={styles.listLink}>governance & impact</Link>
                        <Link href={'/environment-and-impact'} className={styles.listLink}>environment & impact</Link>
                        <Link href={'#'} className={styles.listLink}>suppliers</Link>
                        <Link href={'#'} className={styles.listLink}>join the team</Link>
                        <Link href={'#'} className={styles.listLink}>contact us</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;
