import React from 'react';
import styles from './page.module.css';
import { hero1, hero2, featuteSection, hero3 } from '@/app/data/toolsAndResources/escalatorsAndMovingWalks/escalators';
import HeroWithTextContainer from '@/app/components/ui/heroWithTextContainer/heroWithTextContainer';
import FeatureSectionWithGridLayout from '@/app/components/ui/featureSectionWithGridLayout/featureSectionWithGridLayout';
import Image from 'next/image';
import Link from 'next/link';
import NavigationComponent from '@/app/components/ui/navigationComponent/navigationComponent';

const Page = () => {
    return (
        <section className={styles.escalatorsAndMovingWalks}>
            <HeroWithTextContainer hero={hero1} />

            <div className={styles.flexColumnLayout}>
                <h2 className={styles.headingMedium}>link escalators & moving walks</h2>
                <p className={styles.textNormal}>Refined yet resilient, moving customers and tenants in ways that guide and delight</p>
                <div className={styles.gridLayout}>
                    <div className={styles.gridItem}>
                        <div className={styles.imgContainer}>
                            <Image src={'/images/toolsAndResources/escalatorsAndMovingWalks/feature_1.jpg'}
                                   alt='built to last'
                                   width={250}
                                   height={250}
                                   sizes='100%'
                                   className={styles.img} />
                        </div>
                        <h3 className={styles.headingSmall}>built to last</h3>
                    </div>
                    <div className={styles.gridItem}>
                        <div className={styles.imgContainer}>
                            <Image src={'/images/toolsAndResources/escalatorsAndMovingWalks/feature_2.jpg'}
                                   alt='customized for your building'
                                   width={250}
                                   height={250}
                                   sizes='100%'
                                   className={styles.img} />
                        </div>
                        <h3 className={styles.headingSmall}>customized for your buildings</h3>
                    </div>
                    <div className={styles.gridItem}>
                        <div className={styles.imgContainer}>
                            <Image src={'/images/toolsAndResources/escalatorsAndMovingWalks/feature_3.jpg'}
                                   alt='integrated illumination'
                                   width={250}
                                   height={250}
                                   sizes='100%'
                                   className={styles.img} />
                        </div>
                        <h3 className={styles.headingSmall}>integrated illumination</h3>
                    </div>
                </div>

                <p className={styles.textNormal}>
                    Our escalators are safe, reliable and designed to integrate seamlessly with your building. Our moving walks are engineered to be whisper quiet and smooth. Both are custom-made to complement your building’s unique environment.
                </p>

                <div className={styles.flexRowLayout}>
                    <div className={styles.flexItem}>
                        <h4 className={styles.headingExtraSmall}>escalators</h4>
                        <div className={styles.iconContainer}>
                            <Image src={'/images/toolsAndResources/escalatorsAndMovingWalks/escalator.png'}
                                alt='escalators'
                                width={200}
                                height={200}
                                sizes='100%'
                                className={styles.img} />
                        </div>

                        <ul className={styles.listContainer}>
                            <li className={styles.list}>
                                Max rise height: 39'4" at a step width of 40 in.
                            </li>
                            <li className={styles.list}>
                                Inclination: 30 degrees
                            </li>
                            <li className={styles.list}>
                                Nominal step width: 24 in. / 32 in. / 40 in.
                            </li>
                            <li className={styles.list}>
                                Speed: 100 ft/min
                            </li>
                        </ul>
                    </div>
                    <div className={styles.flexItem}>
                        <h4 className={styles.headingExtraSmall}>moving walks</h4>
                        <div className={styles.iconContainer}>
                            <Image src={'/images/toolsAndResources/escalatorsAndMovingWalks/movingWalks.png'}
                                alt='escalators'
                                width={150}
                                height={150}
                                sizes='100%'
                                className={styles.img} />
                        </div>

                        <ul className={styles.listContainer}>
                            <li className={styles.list}>
                                Max length: 262 ft.
                            </li>
                            <li className={styles.list}>
                                Inclination: 0 up to 3 (10 and 12 degree available on special request)
                            </li>
                            <li className={styles.list}>
                                Palette widths: 32 in. / 40 in.
                            </li>
                            <li className={styles.list}>
                                Speed: 100 ft/min (higher speed available on special request)
                            </li>
                        </ul>
                    </div>
                </div>
                <Link href={'#'} className={styles.link}>download brochure</Link>
            </div>

            <div className={styles.infoContainer}>
                <h2 className={styles.headingSmall}>public escalators</h2>
                <h3 className={styles.headingExtraSmall}>Effortlessly handling the heaviest traffic, year after year</h3>
                <p className={styles.textNormal}>Designed to meet the extreme and varied demands of public spaces such as airports, metros and busy transport hubs, our escalators and moving walks raise the bar for endurance and reliability. You can expect at least 20 years of efficient, safe service without downtime from our products in classic public ‘hot spots’. Fully-APTA compliant escalator and moving walks are available.</p>
                <h3 className={styles.headingExtraSmall}>escalators</h3>
                <ul className={styles.listContainer}>
                    <li className={styles.list}>
                        Max rise height: 65' 7" at a step width of 40 in. (Special request up to 100' rise available)
                    </li>
                    <li className={styles.list}>
                        Inclination: 30°
                    </li>
                    <li className={styles.list}>
                        Normal step width: 32 in / 40 in
                    </li>
                    <li className={styles.list}>
                        Speed: 100 ft / min
                    </li>
                </ul>
                <Link href={'#'} className={styles.link}>explore PL public escalator</Link>
            </div>
            

            <HeroWithTextContainer hero={hero2} />

            <FeatureSectionWithGridLayout item={featuteSection} />

            <div className={styles.infoContainer}>
                <h2 className={styles.headingMedium}>moving walks</h2>
                <h3 className={styles.headingSmall}>Adaptable, safe and reliable, our moving walks are designed to work around your building’s needs.</h3>
                <p className={styles.textNormal}>Our moving walks are engineered to be whisper quiet and smooth. You can expect at least 20 years of efficient, safe service without downtime from our products in classic public ‘hot spots’.</p>
                <div className={styles.flexRowLayout}>
                    <div className={styles.flexItem}>
                        <h4 className={styles.headingExtraSmall}>Commercial Moving Walks</h4>

                        <ul className={styles.listContainer}>
                            <li className={styles.list}>
                                Max length: 262 ft.
                            </li>
                            <li className={styles.list}>
                                Inclination: 0 up to 3 (10 and 12 degree available on special request)
                            </li>
                            <li className={styles.list}>
                                Palette widths: 32 in. / 40 in.
                            </li>
                            <li className={styles.list}>
                                Speed: 100 ft/min (higher speed available on special request)
                            </li>
                        </ul>
                    </div>
                    <div className={styles.flexItem}>
                        <h4 className={styles.headingExtraSmall}>Public Moving Walks</h4>

                        <ul className={styles.listContainer}>
                            <li className={styles.list}>
                                Maximum length: 394'
                            </li>
                            <li className={styles.list}>
                                Inclination: 0° up to 3°
                            </li>
                            <li className={styles.list}>
                                Palette widths: 40 in / 48 in / 56 in
                            </li>
                            <li className={styles.list}>
                                Speed: 100 ft / min (higher speeds available on special request)
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <HeroWithTextContainer hero={hero3} />

            <NavigationComponent />
        </section>

    )
}

export default Page;
